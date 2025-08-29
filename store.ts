import { useState, useEffect } from 'react';

const COINS_KEY = 'totalCoins';

// Initialize state from localStorage
const getInitialCoins = (): number => {
    try {
        const storedValue = window.localStorage.getItem(COINS_KEY);
        // Ensure we return a number, default to 0 if parsing fails or value is null
        const parsed = storedValue ? JSON.parse(storedValue) : 0;
        return typeof parsed === 'number' ? parsed : 0;
    } catch (error) {
        console.error("Error reading coins from localStorage", error);
        return 0;
    }
};

let totalCoins = getInitialCoins();

// Keep a set of listeners
const listeners = new Set<() => void>();

// Create the store object
export const coinStore = {
    // Method to update the state using a function
    set(updater: (prev: number) => number) {
        totalCoins = updater(totalCoins);
        // Persist to localStorage
        try {
            window.localStorage.setItem(COINS_KEY, JSON.stringify(totalCoins));
        } catch (error) {
            console.error("Error writing coins to localStorage", error);
        }
        // Notify all listeners
        listeners.forEach(listener => listener());
    },

    // Method to subscribe to changes
    subscribe(listener: () => void): () => void {
        listeners.add(listener);
        // Return an unsubscribe function
        return () => {
            listeners.delete(listener);
        };
    },

    // Method to get the current state
    get() {
        return totalCoins;
    }
};

// Custom hook to sync a component with the store
export function useCoinStore(): number {
    const [coins, setCoins] = useState(coinStore.get());

    useEffect(() => {
        // subscribe returns an unsubscribe function
        const unsubscribe = coinStore.subscribe(() => {
            setCoins(coinStore.get());
        });
        
        // Cleanup on unmount
        return unsubscribe;
    }, []);

    return coins;
}
