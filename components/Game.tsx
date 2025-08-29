
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Player from './Player';
import Obstacle from './Obstacle';
import Background from './Background';
import Coin from './Coin';
import { CoinIcon, CrownIcon } from './IconComponents';
import {
    GAME_HEIGHT, GAME_WIDTH, GRAVITY, JUMP_STRENGTH, OBSTACLE_SPAWN_RATE, OBSTACLE_SPEED, OBSTACLE_WIDTH,
    PLAYER_HEIGHT, PLAYER_START_X, PLAYER_START_Y, PLAYER_WIDTH, OBSTACLE_GAP, MIN_OBSTACLE_HEIGHT, GROUND_BUFFER,
    COIN_SIZE, COIN_SPAWN_RATE, COIN_CHANCE
} from '../constants';
import type { ObstacleObject, CoinObject, PlayerSkin } from '../types';
import { ObstacleType } from '../types';

interface GameProps {
    gameState: 'start' | 'playing' | 'gameOver' | 'skins';
    onGameOver: (score: number, coins: number) => void;
    selectedSkinId: PlayerSkin;
    totalCoins: number;
    highScore: number;
}

const getInitialGameState = () => ({
    playerPos: { x: PLAYER_START_X, y: PLAYER_START_Y },
    velocityY: 0,
    obstacles: [] as ObstacleObject[],
    coins: [] as CoinObject[],
    score: 0,
    coinsCollected: 0,
    frameCount: 0,
});


const Game: React.FC<GameProps> = ({ gameState, onGameOver, selectedSkinId, highScore }) => {
    const [game, setGame] = useState(getInitialGameState());
    const onGameOverRef = useRef(onGameOver);
    onGameOverRef.current = onGameOver;

    const isPlayingRef = useRef(false);
    useEffect(() => {
        isPlayingRef.current = gameState === 'playing';
    }, [gameState]);

    useEffect(() => {
        if (gameState === 'playing') {
            setGame(getInitialGameState());
        }
    }, [gameState]);

    const jump = useCallback(() => {
        if (gameState === 'playing') {
            setGame(g => ({ ...g, velocityY: JUMP_STRENGTH }));
        }
    }, [gameState]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code === 'Space') jump();
        };
        const handleMouseClick = () => jump();

        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('mousedown', handleMouseClick);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('mousedown', handleMouseClick);
        };
    }, [jump]);


    useEffect(() => {
        if (gameState !== 'playing') return;

        let animationFrameId: number;

        const gameLoop = () => {
            if (!isPlayingRef.current) return;

            setGame(g => {
                const newVelocityY = g.velocityY + GRAVITY;
                const newPlayerY = g.playerPos.y + newVelocityY;

                // --- Collision Detection ---
                const playerLeft = g.playerPos.x;
                const playerRight = g.playerPos.x + PLAYER_WIDTH;
                const playerTop = newPlayerY;
                const playerBottom = newPlayerY + PLAYER_HEIGHT;

                // Ground/Ceiling collision
                if (playerBottom > GAME_HEIGHT - GROUND_BUFFER || playerTop < 0) {
                    onGameOverRef.current(g.score, g.coinsCollected);
                    return g;
                }

                let newScore = g.score;
                const newObstacles = g.obstacles.map(obs => {
                    const obstacleRight = obs.x + OBSTACLE_WIDTH;
                    if (!obs.passed && playerLeft > obstacleRight) {
                        newScore += 1;
                        return { ...obs, x: obs.x + OBSTACLE_SPEED, passed: true };
                    }
                    return { ...obs, x: obs.x + OBSTACLE_SPEED };
                }).filter(obs => obs.x > -OBSTACLE_WIDTH);

                // Obstacle Collision
                for (const obs of newObstacles) {
                    const obstacleLeft = obs.x;
                    const obstacleRight = obs.x + OBSTACLE_WIDTH;
                    const gapTop = obs.topHeight;
                    const gapBottom = obs.topHeight + obs.gap;

                    if (playerRight > obstacleLeft && playerLeft < obstacleRight) {
                        if (playerTop < gapTop || playerBottom > gapBottom) {
                            onGameOverRef.current(newScore, g.coinsCollected);
                            return g;
                        }
                    }
                }
                
                // Spawn new obstacles
                const newFrameCount = g.frameCount + 1;
                if (newFrameCount % OBSTACLE_SPAWN_RATE === 0) {
                    const topHeight = Math.random() * (GAME_HEIGHT - OBSTACLE_GAP - MIN_OBSTACLE_HEIGHT * 2) + MIN_OBSTACLE_HEIGHT;
                    const bottomHeight = GAME_HEIGHT - topHeight - OBSTACLE_GAP;
                    
                    const obstacleTypes = Object.values(ObstacleType).filter(v => typeof v === 'number');
                    const randomType = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)] as ObstacleType;

                    newObstacles.push({
                        x: GAME_WIDTH,
                        topHeight,
                        bottomHeight,
                        gap: OBSTACLE_GAP,
                        passed: false,
                        type: randomType
                    });
                }
                
                // --- Coin Logic ---
                let newCoinsCollected = g.coinsCollected;
                const remainingCoins = g.coins.filter(coin => {
                    const distance = Math.sqrt(
                        Math.pow(g.playerPos.x + PLAYER_WIDTH / 2 - coin.x, 2) +
                        Math.pow(newPlayerY + PLAYER_HEIGHT / 2 - coin.y, 2)
                    );
                    if (distance < PLAYER_WIDTH / 2 + COIN_SIZE / 2) {
                        newCoinsCollected += 1;
                        return false; // remove coin
                    }
                    return coin.x > -COIN_SIZE; // keep coin if on screen
                }).map(coin => ({ ...coin, x: coin.x + OBSTACLE_SPEED }));

                // Spawn new coins
                if (newFrameCount % COIN_SPAWN_RATE === 0 && Math.random() < COIN_CHANCE) {
                    // Try to spawn coin in the middle of the next gap
                    const lastObstacle = newObstacles[newObstacles.length - 1];
                    if (lastObstacle && lastObstacle.x > GAME_WIDTH - OBSTACLE_SPAWN_RATE * Math.abs(OBSTACLE_SPEED) / 2) {
                         remainingCoins.push({
                            id: Date.now() + Math.random(),
                            x: GAME_WIDTH + OBSTACLE_WIDTH / 2,
                            y: lastObstacle.topHeight + OBSTACLE_GAP / 2,
                        });
                    }
                }


                return {
                    ...g,
                    playerPos: { ...g.playerPos, y: newPlayerY },
                    velocityY: newVelocityY,
                    obstacles: newObstacles,
                    coins: remainingCoins,
                    coinsCollected: newCoinsCollected,
                    score: newScore,
                    frameCount: newFrameCount,
                };
            });
            animationFrameId = requestAnimationFrame(gameLoop);
        };

        animationFrameId = requestAnimationFrame(gameLoop);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [gameState]);

    const { playerPos, velocityY, obstacles, coins, score, coinsCollected } = game;

    // We only want to render the game when it's not on the skin selection screen
    if (gameState === 'skins') {
        return <Background />;
    }

    return (
        <div className="relative w-full h-full bg-sky-400">
            <Background />
            
            {obstacles.map((obs, i) => (
                <Obstacle key={i} {...obs} />
            ))}

            {coins.map(coin => (
                <Coin key={coin.id} x={coin.x} y={coin.y} />
            ))}
            
            {(gameState === 'playing' || gameState === 'gameOver') && (
                 <Player x={playerPos.x} y={playerPos.y} velocityY={velocityY} skinId={selectedSkinId} />
            )}

            {/* In-Game UI */}
            {(gameState === 'playing') && (
                <>
                    {/* Score Display */}
                    <div className="absolute top-4 right-4 text-6xl text-white drop-shadow-[0_4px_2px_rgba(0,0,0,0.4)]" style={{ WebkitTextStroke: '3px black' }}>
                        {score}
                    </div>
                     {/* Coins Display */}
                    <div className="absolute top-20 right-4 flex items-center p-2 bg-black/40 rounded-lg border-2 border-yellow-500/50">
                        <div className="w-8 h-8 mr-2"><CoinIcon /></div>
                        <span className="text-3xl text-yellow-300" style={{ WebkitTextStroke: '2px black' }}>
                            {coinsCollected}
                        </span>
                    </div>
                    {/* High Score Display */}
                    <div className="absolute top-4 left-4 flex items-center p-2 bg-black/40 rounded-lg border-2 border-yellow-500/50">
                        <div className="w-8 h-8 mr-2"><CrownIcon /></div>
                        <span className="text-3xl text-yellow-300" style={{ WebkitTextStroke: '2px black' }}>
                            {highScore}
                        </span>
                    </div>
                </>
            )}

        </div>
    );
};

export default Game;
