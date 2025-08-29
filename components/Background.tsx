import React from 'react';

const Background: React.FC = () => {
    return (
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400 to-sky-600 overflow-hidden">
            <style>{`
                @keyframes scroll {
                    from { background-position-x: 0; }
                    to { background-position-x: -800px; }
                }

                .parallax-layer {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-repeat: repeat-x;
                    animation: scroll linear infinite;
                }

                .clouds {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200"><circle cx="100" cy="100" r="50" fill="rgba(255,255,255,0.9)"/><circle cx="160" cy="100" r="60" fill="rgba(255,255,255,0.9)"/><circle cx="220" cy="100" r="50" fill="rgba(255,255,255,0.9)"/><circle cx="450" cy="120" r="70" fill="rgba(255,255,255,0.8)"/><circle cx="530" cy="120" r="80" fill="rgba(255,255,255,0.8)"/><circle cx="700" cy="80" r="40" fill="rgba(255,255,255,0.85)"/><circle cx="750" cy="80" r="50" fill="rgba(255,255,255,0.85)"/></svg>');
                    background-size: 800px;
                    background-position: 0 10%;
                    animation-duration: 60s;
                    bottom: auto;
                    top: 0;
                }

                .hills-back {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200"><path d="M0,200 V100 C100,50 200,150 300,100 C400,50 500,150 600,100 C700,50 800,100 800,100 V200 Z" fill="%23228B22"/></svg>');
                    background-size: 800px;
                    background-position: bottom;
                    height: 200px;
                    animation-duration: 20s;
                    opacity: 0.9;
                }

                .hills-front {
                    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200"><path d="M0,200 V120 C150,180 250,80 400,120 C550,160 650,100 800,120 V200 Z" fill="%2332CD32"/></svg>');
                    background-size: 800px;
                    background-position: bottom;
                    height: 200px;
                    animation-duration: 10s;
                }
            `}</style>
            <div className="parallax-layer clouds"></div>
            <div className="parallax-layer hills-back"></div>
            <div className="parallax-layer hills-front"></div>
        </div>
    );
};

export default React.memo(Background);
