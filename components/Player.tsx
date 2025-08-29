
import React from 'react';
import { PLAYER_WIDTH, PLAYER_HEIGHT, SKINS } from '../constants';
import type { PlayerSkin } from '../types';

interface PlayerProps {
    x: number;
    y: number;
    velocityY: number;
    skinId: PlayerSkin;
}

const Player: React.FC<PlayerProps> = ({ x, y, velocityY, skinId }) => {
    // The player is "flapping" when moving upwards (negative velocity)
    const isFlapping = velocityY < -1; // Add a small threshold
    
    // Tilt the player based on vertical velocity for a dynamic effect
    // Clamped between -30 and 45 degrees for a controlled tilt
    const rotation = Math.min(Math.max(velocityY * 2, -30), 45);

    const SkinComponent = SKINS.find(s => s.id === skinId)?.component;

    return (
        <div
            className={`absolute`}
            style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${PLAYER_WIDTH}px`,
                height: `${PLAYER_HEIGHT}px`,
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.2s ease-out', // Smooth rotation transition
            }}
        >
            {SkinComponent ? <SkinComponent isFlapping={isFlapping} /> : null}
        </div>
    );
};

export default Player;
