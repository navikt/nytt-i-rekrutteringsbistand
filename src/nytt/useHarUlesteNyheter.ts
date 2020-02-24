import { useState, useEffect } from 'react';
import { Nyhet } from './Nytt';

const hentHarUlesteNyheter = (nyheter: Nyhet[], sistLest: Date) => {
    if (nyheter.length === 0) {
        return false;
    }

    return nyheter[0].dato > sistLest;
};

const LOCAL_STORAGE_KEY = 'sistLest';

const useHarUlesteNyheter = (nyheter: Nyhet[]): [boolean, () => void] => {
    const [harUlesteNyheter, setHarUlesteNyheter] = useState<boolean>(false);

    useEffect(() => {
        try {
            const localStorageValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);
            if (localStorageValue) {
                const sistLestFraLocalStorage = new Date(JSON.parse(localStorageValue));
                setHarUlesteNyheter(hentHarUlesteNyheter(nyheter, sistLestFraLocalStorage));
            }
        } catch (error) {
            console.error('Kunne ikke hente fra local storage:', error);
        }
    }, [nyheter]);

    const markerSomLest = () => {
        setHarUlesteNyheter(false);

        try {
            const sistLest = JSON.stringify(new Date());
            window.localStorage.setItem(LOCAL_STORAGE_KEY, sistLest);
        } catch (error) {
            console.error('Kunne ikke lagre til local storage:', error);
        }
    };

    return [harUlesteNyheter, markerSomLest];
};

export default useHarUlesteNyheter;
