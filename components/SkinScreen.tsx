
import React from 'react';
import { SKINS } from '../constants';
import type { PlayerSkin } from '../types';
import { CoinIcon } from './IconComponents';

interface SkinScreenProps {
    totalCoins: number;
    purchasedSkins: PlayerSkin[];
    selectedSkin: PlayerSkin;
    onBuySkin: (skinId: PlayerSkin) => void;
    onSelectSkin: (skinId: PlayerSkin) => void;
    onBack: () => void;
}

const SkinScreen: React.FC<SkinScreenProps> = ({
    totalCoins,
    purchasedSkins,
    selectedSkin,
    onBuySkin,
    onSelectSkin,
    onBack
}) => {
    return (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-4 bg-black bg-opacity-80">
            <h2 className="text-7xl text-cyan-300 drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)]" style={{ WebkitTextStroke: '3px black' }}>
                NEGOZIO SKIN
            </h2>

            <div className="my-4 flex items-center justify-center p-2 bg-black/50 rounded-lg border-2 border-yellow-400">
                 <div className="w-8 h-8 mr-2"><CoinIcon /></div>
                <span className="text-4xl text-yellow-300" style={{ WebkitTextStroke: '1px black' }}>
                    {totalCoins}
                </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 overflow-y-auto max-h-[50vh] w-full max-w-lg">
                {SKINS.map((skin) => {
                    const isPurchased = purchasedSkins.includes(skin.id);
                    const isSelected = selectedSkin === skin.id;
                    const canAfford = totalCoins >= skin.price;

                    return (
                        <div
                            key={skin.id}
                            className={`flex flex-col items-center p-3 rounded-lg border-4 ${isSelected ? 'border-lime-400 bg-lime-400/20' : 'border-gray-600 bg-gray-800/80'}`}
                        >
                            <div className="w-24 h-24 mb-2">
                                <skin.component isFlapping={false} />
                            </div>
                            <h3 className="text-xl text-white" style={{ WebkitTextStroke: '0.5px black' }}>{skin.name}</h3>
                            
                            {!isPurchased ? (
                                <div className="flex items-center text-yellow-400 text-lg">
                                    <div className="w-5 h-5 mr-1"><CoinIcon /></div>
                                    <span>{skin.price}</span>
                                </div>
                            ) : (
                                <p className="text-lime-400 text-lg">ACQUISTATO</p>
                            )}

                            <button
                                onClick={() => {
                                    if (isPurchased) {
                                        onSelectSkin(skin.id);
                                    } else {
                                        onBuySkin(skin.id);
                                    }
                                }}
                                disabled={isSelected || (!isPurchased && !canAfford)}
                                className="mt-2 px-4 py-1 text-lg text-black border-2 border-black rounded-md shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full"
                                style={{
                                    backgroundColor: isSelected ? '#a3e635' : (isPurchased ? '#38bdf8' : (canAfford ? '#facc15' : '#6b7280')),
                                }}
                            >
                                {isSelected ? 'SELEZIONATO' : (isPurchased ? 'SELEZIONA' : 'COMPRA')}
                            </button>
                        </div>
                    );
                })}
            </div>

            <button
                onClick={onBack}
                className="mt-6 px-8 py-3 bg-red-500 text-white text-3xl border-4 border-black rounded-lg shadow-lg transform hover:scale-105 transition-transform active:translate-y-1"
            >
                TORNA AL MENU
            </button>
        </div>
    );
};

export default SkinScreen;
