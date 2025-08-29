
import React from 'react';

export const EagleIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    // Determine wing rotation based on flapping state for animation
    const wingTransform = isFlapping ? "rotate(-30 50 55)" : "rotate(10 50 55)";

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" />
                </filter>
            </defs>
            <g style={{ filter: 'url(#shadow)'}}>
                {/* Wings - animated via transform */}
                <g transform={wingTransform} style={{ transition: 'transform 0.1s ease-out' }}>
                    <path d="M48,55 C30,40 15,60 40,75 L48,55 Z" fill="#A0522D" stroke="#654321" strokeWidth="2" />
                    <path d="M52,55 C70,40 85,60 60,75 L52,55 Z" fill="#A0522D" stroke="#654321" strokeWidth="2" />
                </g>
                
                {/* Body */}
                <path d="M45,50 a12,25 0 0,1 10,0 L 50 85 Z" fill="#A0522D" stroke="#654321" strokeWidth="2" />
                 {/* Feet */}
                <path d="M45,82 L40,90 L48,90 Z" fill="#FFC300" stroke="black" strokeWidth="1.5" />
                <path d="M55,82 L60,90 L52,90 Z" fill="#FFC300" stroke="black" strokeWidth="1.5" />

                {/* Head */}
                <circle cx="50" cy="40" r="18" fill="white" stroke="black" strokeWidth="2" />
                
                {/* Beak */}
                <polygon points="65,38 75,42 65,46" fill="#FFC300" stroke="black" strokeWidth="2" />
                
                {/* Eye */}
                <circle cx="59" cy="36" r="3" fill="black" />
                <circle cx="60" cy="35" r="1" fill="white" />
            </g>
        </svg>
    );
};

export const GattoPardoIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const earTransform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)'}}>
                {/* Body */}
                <ellipse cx="50" cy="65" rx="30" ry="25" fill="#D2B48C" stroke="#8B4513" strokeWidth="2" />
                {/* Head */}
                <circle cx="50" cy="40" r="25" fill="#D2B48C" stroke="#8B4513" strokeWidth="2" />
                {/* Ears */}
                <g style={{ transition: 'transform 0.1s ease-out' }} transform={earTransform}>
                    <path d="M30,20 L40,5 L50,20 Z" fill="#D2B48C" stroke="#8B4513" strokeWidth="2" />
                    <path d="M70,20 L60,5 L50,20 Z" fill="#D2B48C" stroke="#8B4513" strokeWidth="2" />
                </g>
                {/* Eyes */}
                <circle cx="40" cy="40" r="4" fill="black" />
                <circle cx="60" cy="40" r="4" fill="black" />
                <circle cx="41" cy="39" r="1" fill="white" />
                <circle cx="61" cy="39" r="1" fill="white" />
                {/* Nose */}
                <path d="M48,48 L52,48 L50,52 Z" fill="#FFC0CB" stroke="black" strokeWidth="1"/>
                {/* Whiskers */}
                <path d="M25,45 Q35,48 45,45" stroke="black" strokeWidth="1" fill="none" />
                <path d="M25,50 Q35,53 45,50" stroke="black" strokeWidth="1" fill="none" />
                <path d="M75,45 Q65,48 55,45" stroke="black" strokeWidth="1" fill="none" />
                <path d="M75,50 Q65,53 55,50" stroke="black" strokeWidth="1" fill="none" />
            </g>
        </svg>
    );
};

export const MarzoneIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const bodyTransform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
         <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={bodyTransform}>
                {/* Body (Suit) */}
                <rect x="25" y="55" width="50" height="35" fill="#4682B4" stroke="black" strokeWidth="2" rx="10"/>
                 {/* Shirt */}
                <path d="M40,55 L50,65 L60,55 Z" fill="white" stroke="black" strokeWidth="1"/>
                 {/* Tie */}
                <path d="M50,65 L48,80 L52,80 Z" fill="red" stroke="black" strokeWidth="1"/>
                {/* Head */}
                <circle cx="50" cy="35" r="20" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                {/* Hair */}
                <path d="M35,20 Q50,10 65,20 L60,30 Q50,25 40,30 Z" fill="#3D2B1F" />
                {/* Eyes (Sunglasses) */}
                <rect x="35" y="30" width="12" height="8" fill="black" rx="2"/>
                <rect x="53" y="30" width="12" height="8" fill="black" rx="2"/>
                <rect x="47" y="32" width="6" height="3" fill="black"/>
                {/* Mouth */}
                <path d="M45,45 Q50,48 55,45" stroke="black" strokeWidth="1.5" fill="none" />
            </g>
        </svg>
    );
};

export const CapibaraIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3) rotate(2)" : "translate(0, 0) rotate(0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <ellipse cx="50" cy="60" rx="35" ry="25" fill="#966F33" stroke="#5C4033" strokeWidth="2" />
                <rect x="40" y="45" width="20" height="10" fill="#966F33" />
                <circle cx="42" cy="50" r="3" fill="black" /><circle cx="58" cy="50" r="3" fill="black" />
                <rect x="47" y="55" width="6" height="4" fill="#5C4033" rx="2" />
            </g>
        </svg>
    );
};
export const GerryScottiIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="30" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <rect x="30" y="40" width="15" height="8" fill="none" stroke="black" strokeWidth="2" rx="4" />
                <rect x="55" y="40" width="15" height="8" fill="none" stroke="black" strokeWidth="2" rx="4" />
                <path d="M45 44 h 10" stroke="black" strokeWidth="2" />
                <path d="M40,65 Q50,75 60,65" stroke="black" strokeWidth="2.5" fill="none" />
            </g>
        </svg>
    );
};
export const PapaIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <path d="M20 90 L 50 20 L 80 90 Z" fill="white" stroke="black" strokeWidth="2" />
                <circle cx="50" cy="20" r="10" fill="white" stroke="black" strokeWidth="2" />
                <path d="M45,70 Q50,75 55,70" stroke="black" strokeWidth="1.5" fill="none" />
                <circle cx="45" cy="60" r="2" fill="black" /><circle cx="55" cy="60" r="2" fill="black" />
            </g>
        </svg>
    );
};
export const BerlusconiIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <rect x="25" y="55" width="50" height="35" fill="#003366" stroke="black" strokeWidth="2" rx="5"/>
                <circle cx="50" cy="40" r="25" fill="#FFE4C4" stroke="black" strokeWidth="2"/>
                <path d="M30,20 Q50,10 70,20 L65,35 Q50,30 35,35 Z" fill="#4A4A4A" />
                <path d="M35,70 Q50,85 65,70" stroke="white" strokeWidth="3" fill="none" />
            </g>
        </svg>
    );
};
export const MarracashIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="28" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M35,30 Q50,20 65,30 L60,20 Q50,15 40,20 Z" fill="black" />
                <path d="M30 70 L 70 70" fill="none" stroke="black" strokeWidth="2" />
                <rect x="30" y="45" width="40" height="5" fill="none" stroke="black" strokeWidth="2" />
            </g>
        </svg>
    );
};
export const ShivaIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="30" fill="black" />
                <rect x="35" y="40" width="30" height="15" fill="#F5DEB3" />
                <circle cx="45" cy="48" r="3" fill="black" /><circle cx="55" cy="48" r="3" fill="black" />
            </g>
        </svg>
    );
};
export const TonyEffeIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="28" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <rect x="30" y="40" width="40" height="10" fill="black" rx="3" />
                <path d="M40,25 Q50,18 60,25" fill="none" stroke="black" strokeWidth="4" />
            </g>
        </svg>
    );
};
export const SferaEbbastaIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="28" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M30,35 Q50,15 70,35 T 50 45 T 30 35" fill="#FF00FF" />
                <circle cx="40" cy="50" r="8" fill="red" stroke="black" strokeWidth="1" />
                <circle cx="60" cy="50" r="8" fill="red" stroke="black" strokeWidth="1" />
            </g>
        </svg>
    );
};
export const GiganteBuonoIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <ellipse cx="50" cy="50" rx="25" ry="40" fill="#32CD32" stroke="#228B22" strokeWidth="2" />
                <circle cx="40" cy="40" r="4" fill="white" /><circle cx="60" cy="40" r="4" fill="white" />
                <circle cx="41" cy="40" r="2" fill="black" /><circle cx="61" cy="40" r="2" fill="black" />
                <path d="M40,65 Q50,75 60,65" stroke="white" strokeWidth="2" fill="none" />
            </g>
        </svg>
    );
};
export const SignoraInGialloIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="28" fill="#FFE4C4" stroke="black" strokeWidth="2"/>
                <path d="M30,40 Q50,10 70,40 C 75 55, 25 55, 30 40" fill="lightgray" stroke="black" strokeWidth="1"/>
                <path d="M40,60 Q50,65 60,60" fill="none" stroke="black" strokeWidth="2" />
            </g>
        </svg>
    );
};
export const PippoBaudoIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="28" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M35,25 Q50,18 65,25" fill="none" stroke="black" strokeWidth="4" />
                <path d="M40,65 Q50,75 60,65" stroke="black" strokeWidth="2.5" fill="none" />
                <rect x="65" y="60" width="8" height="20" fill="gray" /><circle cx="69" cy="60" r="6" fill="darkgray" />
            </g>
        </svg>
    );
};
export const MotorinoIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3) rotate(-5)" : "rotate(0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform} transform-origin="center">
                <path d="M30 80 L 70 80 L 80 60 L 50 60 L 40 40 L 30 40 Z" fill="red" stroke="black" strokeWidth="2" />
                <circle cx="35" cy="80" r="10" fill="gray" stroke="black" strokeWidth="2" />
                <circle cx="75" cy="80" r="10" fill="gray" stroke="black" strokeWidth="2" />
                <rect x="45" y="50" width="30" height="10" fill="black" />
            </g>
        </svg>
    );
};
export const PizzaIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "rotate(10)" : "rotate(0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform} transform-origin="center">
                <path d="M20 80 L 50 20 L 80 80 A 40 40 0 0 1 20 80 Z" fill="#FFD700" stroke="#D2691E" strokeWidth="3" />
                <circle cx="40" cy="60" r="8" fill="red" stroke="darkred" strokeWidth="1" />
                <circle cx="60" cy="50" r="8" fill="red" stroke="darkred" strokeWidth="1" />
            </g>
        </svg>
    );
};
export const CaffettieraIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <path d="M30 90 L 35 55 L 65 55 L 70 90 Z" fill="#C0C0C0" stroke="black" strokeWidth="2" />
                <path d="M35 55 L 40 20 L 60 20 L 65 55 Z" fill="#C0C0C0" stroke="black" strokeWidth="2" />
                <rect x="45" y="10" width="10" height="10" fill="black" />
                <path d="M65 30 C 80 30, 80 50, 65 50" fill="none" stroke="black" strokeWidth="3" />
            </g>
        </svg>
    );
};
export const PandaIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -2)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <rect x="15" y="45" width="70" height="30" fill="white" stroke="black" strokeWidth="2" rx="5" />
                <rect x="25" y="25" width="50" height="20" fill="#ADD8E6" stroke="black" strokeWidth="2" />
                <circle cx="30" cy="75" r="10" fill="gray" stroke="black" strokeWidth="2" />
                <circle cx="70" cy="75" r="10" fill="gray" stroke="black" strokeWidth="2" />
            </g>
        </svg>
    );
};
export const CinqueCentoIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -2)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <path d="M20 75 A 30 30 0 0 1 80 75 V 50 A 20 20 0 0 0 60 30 H 40 A 20 20 0 0 0 20 50 Z" fill="#B0E0E6" stroke="black" strokeWidth="2" />
                <circle cx="30" cy="75" r="10" fill="white" stroke="black" strokeWidth="2" />
                <circle cx="70" cy="75" r="10" fill="white" stroke="black" strokeWidth="2" />
                <circle cx="50" cy="50" r="5" fill="yellow" />
            </g>
        </svg>
    );
};
export const TottiIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <rect x="25" y="50" width="50" height="40" fill="#FF8C00" stroke="#8B0000" strokeWidth="2" />
                <circle cx="50" cy="35" r="20" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M35,20 Q50,15 65,20" fill="none" stroke="black" strokeWidth="3" />
                <circle cx="65" cy="55" r="8" fill="#F5DEB3" /><path d="M60 55 L 70 50" stroke="black" />
            </g>
        </svg>
    );
};
export const DelPieroIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <rect x="25" y="50" width="50" height="40" fill="white" stroke="black" strokeWidth="2" />
                <rect x="45" y="50" width="10" height="40" fill="black" />
                <circle cx="50" cy="35" r="20" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M50 48 Q 55 52 50 56" fill="red" />
            </g>
        </svg>
    );
};
export const ChielliniIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <rect x="25" y="50" width="50" height="40" fill="white" stroke="black" strokeWidth="2" />
                <rect x="45" y="50" width="10" height="40" fill="black" />
                <circle cx="50" cy="35" r="20" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <rect x="30" y="25" width="40" height="8" fill="white" stroke="black" strokeWidth="1" transform="rotate(-10 50 35)"/>
            </g>
        </svg>
    );
};
export const VespaIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3) rotate(-5)" : "rotate(0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform} transform-origin="center">
                <path d="M25 80 C 40 90, 70 90, 85 80 L 70 50 L 50 50 L 40 30" fill="#ADD8E6" stroke="black" strokeWidth="2" />
                <circle cx="35" cy="80" r="10" fill="white" stroke="black" strokeWidth="2" />
                <path d="M40 30 L 60 25" stroke="black" strokeWidth="3" />
            </g>
        </svg>
    );
};
export const ColosseoIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <ellipse cx="50" cy="60" rx="40" ry="20" fill="#DEB887" stroke="#8B4513" strokeWidth="2" />
                <path d="M20 60 V 40 A 30 10 0 0 1 80 40 V 60" fill="none" stroke="#8B4513" strokeWidth="3" />
                <path d="M30 48 A 5 3 0 0 1 40 48" fill="none" stroke="#8B4513" strokeWidth="2" />
                <path d="M60 48 A 5 3 0 0 1 70 48" fill="none" stroke="#8B4513" strokeWidth="2" />
            </g>
        </svg>
    );
};
export const GondolaIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "rotate(2)" : "rotate(0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform} transform-origin="center">
                <path d="M10 60 C 20 50, 80 50, 90 60 L 80 70 L 20 70 Z" fill="black" stroke="gray" strokeWidth="1" />
                <path d="M85 60 C 95 50, 95 30, 85 20" fill="none" stroke="black" strokeWidth="3" />
            </g>
        </svg>
    );
};
export const CannoloIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "rotate(5)" : "rotate(0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform} transform-origin="center">
                <rect x="20" y="40" width="60" height="20" fill="#D2B48C" stroke="#8B4513" strokeWidth="2" rx="10"/>
                <circle cx="20" cy="50" r="10" fill="white" /> <circle cx="80" cy="50" r="10" fill="white" />
            </g>
        </svg>
    );
};
export const ApeCarIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <rect x="10" y="50" width="60" height="30" fill="lightblue" stroke="black" strokeWidth="2" />
                <path d="M70 50 L 85 30 L 70 30 Z" fill="lightblue" stroke="black" strokeWidth="2" />
                <circle cx="25" cy="80" r="8" fill="gray" /><circle cx="55" cy="80" r="8" fill="gray" />
                <circle cx="80" cy="50" r="8" fill="gray" />
            </g>
        </svg>
    );
};
export const AmadeusIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="45" r="25" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M40,60 Q50,70 60,60" stroke="black" strokeWidth="2.5" fill="none" />
                <rect x="35" y="35" width="10" height="8" fill="none" stroke="black" strokeWidth="2" rx="2" />
                <rect x="55" y="35" width="10" height="8" fill="none" stroke="black" strokeWidth="2" rx="2" />
                <path d="M30,30 Q50,20 70,30" stroke="black" strokeWidth="4" fill="none" />
            </g>
        </svg>
    );
};
export const FedezIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="28" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M30 30 L 70 30 L 50 15 Z" fill="black" />
                <path d="M35 55 L 45 60 L 35 65 Z" fill="black" />
            </g>
        </svg>
    );
};
export const ChiaraFerragniIcon: React.FC<{ isFlapping: boolean }> = ({ isFlapping }) => {
    const transform = isFlapping ? "translate(0, -3)" : "translate(0, 0)";
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs><filter id="shadow"><feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" /></filter></defs>
            <g style={{ filter: 'url(#shadow)', transition: 'transform 0.1s ease-out' }} transform={transform}>
                <circle cx="50" cy="50" r="28" fill="#F5DEB3" stroke="black" strokeWidth="2"/>
                <path d="M30 45 C 40 35, 60 35, 70 45" fill="none" stroke="black" strokeWidth="3" />
                <circle cx="50" cy="50" r="8" fill="#00BFFF" />
                <rect x="35" y="30" width="30" height="4" fill="black" />
            </g>
        </svg>
    );
};

// FIX: Added the missing CrownIcon component, which was causing import errors in App.tsx and Game.tsx. This icon is used to represent the high score.
export const CrownIcon: React.FC = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
            <filter id="crown-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="black" floodOpacity="0.5" />
            </filter>
        </defs>
        <g style={{ filter: 'url(#crown-shadow)'}}>
            <path d="M20 80 L 25 40 L 40 60 L 50 30 L 60 60 L 75 40 L 80 80 Z" fill="#FFD700" stroke="#B8860B" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="25" cy="40" r="5" fill="#E53935" />
            <circle cx="50" cy="30" r="5" fill="#1E88E5" />
            <circle cx="75" cy="40" r="5" fill="#E53935" />
        </g>
    </svg>
);

export const CoinIcon: React.FC = () => (
     <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
            <radialGradient id="gold_gradient" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#FFDF00" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="100%" stopColor="#B8860B" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#gold_gradient)" stroke="#DAA520" strokeWidth="5" />
        <text x="50" y="68" fontSize="48" fill="#B8860B" textAnchor="middle" fontFamily="Bangers" stroke="#fff" strokeWidth="1">
            S
        </text>
    </svg>
);


export const PiadinaIcon: React.FC = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
        <defs>
            <pattern id="piadina-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                <circle cx="10" cy="10" r="8" fill="#f0e68c" />
                <circle cx="10" cy="10" r="3" fill="rgba(210, 180, 140, 0.5)" />
                 <circle cx="5" cy="15" r="2" fill="rgba(210, 180, 140, 0.4)" />
                  <circle cx="15" cy="5" r="2.5" fill="rgba(210, 180, 140, 0.6)" />
            </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#piadina-pattern)" />
        <rect width="100" height="100" fill="transparent" stroke="#a0522d" strokeWidth="5"/>
    </svg>
);

export const EstathePeroniIcon: React.FC = () => (
    <div className="w-full h-full flex flex-col">
        {/* Estathe */}
        <div className="flex-1 bg-yellow-300 border-4 border-black flex items-center justify-center">
            <span className="text-red-600 text-3xl transform -rotate-12">ESTATHÉ</span>
        </div>
        {/* Peroni */}
        <div className="flex-1 bg-blue-700 border-4 border-black flex items-center justify-center">
            <span className="text-white text-3xl">PERONI</span>
        </div>
    </div>
);

export const PortaBlindataIcon: React.FC = () => (
    <div className="w-full h-full bg-yellow-900 border-8 border-yellow-700 p-2 flex items-center justify-end">
        <div className="w-4 h-4 bg-gray-400 rounded-full mr-4 border-2 border-black"></div>
    </div>
);
