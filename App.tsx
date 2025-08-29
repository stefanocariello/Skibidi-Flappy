
import React, { useState, useCallback, useEffect } from 'react';
import Game from './components/Game';
import SkinScreen from './components/SkinScreen';
import { SKINS } from './constants';
import { PlayerSkin } from './types';
import { coinStore, useCoinStore } from './store';
import { CrownIcon } from './components/IconComponents';

type GameState = 'start' | 'playing' | 'gameOver' | 'skins';

// Custom hook to manage state with localStorage
function useLocalStorageState<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [state, setState] = useState<T>(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : defaultValue;
// FIX: Corrected the syntax of the catch block. It was missing parentheses for the error object and curly braces for the block, leading to multiple compilation errors.
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [key, state]);

    return [state, setState];
}

const CoinIcon: React.FC = () => (
     <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
            <radialGradient id="gold_gradient_app" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#FFDF00" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#gold_gradient_app)" stroke="#DAA520" strokeWidth="5" />
        <text x="50" y="68" fontSize="48" fill="#B8860B" textAnchor="middle" fontFamily="Bangers" stroke="#fff" strokeWidth="1">
            S
        </text>
    </svg>
);


const StartScreen: React.FC<{ onStart: () => void; onOpenSkins: () => void; highScore: number }> = ({ onStart, onOpenSkins, highScore }) => (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
        <div className="absolute top-4 left-4 flex items-center p-2 bg-black/40 rounded-lg border-2 border-yellow-500/50">
            <div className="w-8 h-8 mr-2"><CrownIcon /></div>
            <span className="text-3xl text-yellow-300" style={{ WebkitTextStroke: '2px black' }}>
                {highScore}
            </span>
        </div>
        <h1 className="text-8xl md:text-9xl text-yellow-300 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] tracking-wider" style={{ WebkitTextStroke: '4px black' }}>Skibidi Flappy</h1>
        <p className="text-2xl md:text-3xl mt-4 text-cyan-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '1px black' }}>SPINGI FORTE PER VOLARE</p>
        <div className="flex flex-col items-center mt-8 space-y-4">
            <button
                onClick={onStart}
                className="px-8 py-4 bg-lime-400 text-black text-4xl border-4 border-black rounded-lg shadow-lg transform hover:scale-105 transition-transform active:translate-y-1"
            >
                INIZIA
            </button>
            <button
                onClick={onOpenSkins}
                className="px-8 py-3 bg-cyan-400 text-black text-3xl border-4 border-black rounded-lg shadow-lg transform hover:scale-105 transition-transform active:translate-y-1"
            >
                SKIN
            </button>
        </div>
        <p className="mt-8 text-lg text-gray-300">Usa Spazio o Clicca per saltare</p>
    </div>
);

const GameOverScreen: React.FC<{ score: number; totalCoins: number; onRestart: () => void; onBackToMenu: () => void; highScore: number }> = ({ score, totalCoins, onRestart, onBackToMenu, highScore }) => (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4 bg-black bg-opacity-70">
        <h2 className="text-8xl text-red-500 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '4px black' }}>HAI PERSO</h2>
        
        {score > highScore && (
            <p className="text-3xl mt-4 text-lime-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '1px black' }}>
                NUOVO RECORD!
            </p>
        )}

        <p className="text-4xl mt-2 text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '1px black' }}>PUNTEGGIO: {score}</p>
        <p className="text-2xl mt-1 text-gray-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '1px black' }}>RECORD: {highScore}</p>

        <div className="flex items-center mt-4 p-2 bg-black/40 rounded-lg border-2 border-yellow-500/50">
            <div className="w-10 h-10 mr-3"><CoinIcon /></div>
            <span className="text-4xl text-yellow-300" style={{ WebkitTextStroke: '2px black' }}>
                {totalCoins}
            </span>
        </div>

        <div className="flex flex-col items-center mt-8 space-y-4">
            <button
                onClick={onRestart}
                className="px-8 py-4 bg-lime-400 text-black text-4xl border-4 border-black rounded-lg shadow-lg transform hover:scale-105 transition-transform active:translate-y-1"
            >
                RIPROVA
            </button>
            <button
                onClick={onBackToMenu}
                className="px-6 py-3 bg-red-500 text-white text-3xl border-4 border-black rounded-lg shadow-lg transform hover:scale-105 transition-transform active:translate-y-1"
            >
                MENU
            </button>
        </div>
    </div>
);

const App: React.FC = () => {
    const [gameState, setGameState] = useState<GameState>('start');
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useLocalStorageState<number>('highScore', 0);

    const totalCoins = useCoinStore();
    const [purchasedSkins, setPurchasedSkins] = useLocalStorageState<PlayerSkin[]>('purchasedSkins', [PlayerSkin.Default]);
    const [selectedSkin, setSelectedSkin] = useLocalStorageState<PlayerSkin>('selectedSkin', PlayerSkin.Default);


    const handleStart = () => {
        setScore(0);
        setGameState('playing');
    };

    const handleGameOver = (finalScore: number, finalCoins: number) => {
        const oldHighScore = highScore;
        setScore(finalScore);
        coinStore.set(prev => (Number(prev) || 0) + finalCoins);
        if (finalScore > oldHighScore) {
            setHighScore(finalScore);
        }
        setGameState('gameOver');
    };

    const handleOpenSkins = () => setGameState('skins');
    const handleBackToMenu = () => setGameState('start');
    

    const handleBuySkin = useCallback((skinId: PlayerSkin) => {
        const skin = SKINS.find(s => s.id === skinId);
        if (!skin) return;

        const currentCoins = coinStore.get();
        if (currentCoins >= skin.price && !purchasedSkins.includes(skinId)) {
            coinStore.set(prev => prev - skin.price);
            setPurchasedSkins(prev => [...prev, skinId]);
            setSelectedSkin(skinId);
        }
    }, [purchasedSkins, setPurchasedSkins, setSelectedSkin]);

    const handleSelectSkin = useCallback((skinId: PlayerSkin) => {
        if (purchasedSkins.includes(skinId)) {
            setSelectedSkin(skinId);
        }
    }, [purchasedSkins, setSelectedSkin]);


    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black select-none">
            <div className="relative w-full h-full max-w-2xl max-h-[1024px] overflow-hidden">
                {gameState === 'start' && <StartScreen onStart={handleStart} onOpenSkins={handleOpenSkins} highScore={highScore} />}
                {gameState === 'gameOver' && <GameOverScreen score={score} totalCoins={totalCoins} onRestart={handleStart} onBackToMenu={handleBackToMenu} highScore={highScore} />}
                {gameState === 'skins' && (
                    <SkinScreen
                        totalCoins={totalCoins}
                        purchasedSkins={purchasedSkins}
                        selectedSkin={selectedSkin}
                        onBuySkin={handleBuySkin}
                        onSelectSkin={handleSelectSkin}
                        onBack={handleBackToMenu}
                    />
                )}
                <Game
                    gameState={gameState}
                    onGameOver={handleGameOver}
                    selectedSkinId={selectedSkin}
                    totalCoins={totalCoins}
                    highScore={highScore}
                />
            </div>
        </div>
    );
};

export default App;
