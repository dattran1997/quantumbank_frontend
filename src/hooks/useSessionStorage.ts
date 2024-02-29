import { useState } from "react";


export default function useSessionStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
  
            setStoredValue(valueToStore);
            // Save to session storage
            window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log('Failed to save to session storage');
        }
    }

    return [storedValue, setValue] as const;
}