
import React from 'react';
import { CoinIcon } from './IconComponents';
import { COIN_SIZE } from '../constants';

interface CoinProps {
    x: number;
    y: number;
}

const Coin: React.FC<CoinProps> = ({ x, y }) => {
    return (
        <div
            className="absolute"
            style={{
                left: `${x - COIN_SIZE / 2}px`,
                top: `${y - COIN_SIZE / 2}px`,
                width: `${COIN_SIZE}px`,
                height: `${COIN_SIZE}px`,
            }}
            aria-hidden="true"
        >
            <CoinIcon />
        </div>
    );
};

export default React.memo(Coin);
