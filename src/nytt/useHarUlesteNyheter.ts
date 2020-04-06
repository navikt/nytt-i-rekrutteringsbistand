import { useState, useEffect } from 'react';
import { Nyhet } from './Nytt';

const brukerHarUlesteNyheter = (nyheter: Nyhet[], antallLesteNyheter: number) => {
    if (nyheter.length === 0) {
        return false;
    }

    return nyheter.length > antallLesteNyheter;
};

const LOCAL_STORAGE_KEY = 'antallLesteNyheter';

const useHarUlesteNyheter = (
    nyheter: Nyhet[],
    onFørsteBesøk: () => void
): [boolean, () => void] => {
    const [harUlesteNyheter, setHarUlesteNyheter] = useState<boolean>(false);

    useEffect(() => {
        try {
            const localStorageValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);

            if (localStorageValue) {
                const antallLesteFraLocalStorage = Number.parseInt(JSON.parse(localStorageValue));
                setHarUlesteNyheter(brukerHarUlesteNyheter(nyheter, antallLesteFraLocalStorage));
            } else {
                onFørsteBesøk();
                setHarUlesteNyheter(true);
            }
        } catch (error) {
            console.error('Kunne ikke hente fra local storage:', error);
        }
    }, [nyheter]);

    const markerSomLest = () => {
        setHarUlesteNyheter(false);

        try {
            const antallLesteNyheter = JSON.stringify(nyheter.length);
            window.localStorage.setItem(LOCAL_STORAGE_KEY, antallLesteNyheter);
        } catch (error) {
            console.error('Kunne ikke lagre til local storage:', error);
        }
    };

    return [harUlesteNyheter, markerSomLest];
};

export default useHarUlesteNyheter;
