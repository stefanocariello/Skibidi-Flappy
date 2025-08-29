import React from 'react';
import { ObstacleType } from '../types';
import { PiadinaIcon, EstathePeroniIcon, PortaBlindataIcon } from './IconComponents';
import { OBSTACLE_WIDTH } from '../constants';

interface ObstacleProps {
    x: number;
    topHeight: number;
    bottomHeight: number;
    gap: number;
    type: ObstacleType;
}

const ObstacleContent: React.FC<{ type: ObstacleType }> = React.memo(({ type }) => {
    switch (type) {
        case ObstacleType.Piadina:
            return <PiadinaIcon />;
        case ObstacleType.EstathéPeroni:
            return <EstathePeroniIcon />;
        case ObstacleType.PortaBlindata:
            return <PortaBlindataIcon />;
        default:
            return null;
    }
});

const Obstacle: React.FC<ObstacleProps> = ({ x, topHeight, bottomHeight, gap, type }) => {
    const bottomObstacleTop = topHeight + gap;
    
    return (
        <>
            {/* Top Obstacle */}
            <div
                className="absolute top-0"
                style={{
                    left: `${x}px`,
                    width: `${OBSTACLE_WIDTH}px`,
                    height: `${topHeight}px`,
                }}
            >
                <ObstacleContent type={type} />
            </div>

            {/* Bottom Obstacle */}
            <div
                className="absolute"
                style={{
                    left: `${x}px`,
                    top: `${bottomObstacleTop}px`,
                    width: `${OBSTACLE_WIDTH}px`,
                    height: `${bottomHeight}px`,
                }}
            >
                <ObstacleContent type={type} />
            </div>
        </>
    );
};

export default React.memo(Obstacle);