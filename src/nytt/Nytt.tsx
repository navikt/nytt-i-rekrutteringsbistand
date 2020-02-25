import React, { FunctionComponent, ReactNode, useState, useEffect, useRef } from 'react';
import { Element } from 'nav-frontend-typografi';
import Popover, { PopoverOrientering, PopoverProps } from 'nav-frontend-popover';

import Artikkel from './Artikkel';
import './Nytt.less';
import useHarUlesteNyheter from './useHarUlesteNyheter';
import Ikon from './Ikon';

export type Nyhet = {
    dato: Date;
    tittel: string;
    innhold: ReactNode;
};

interface Props extends Partial<PopoverProps> {
    navn: string;
    nyheter: Nyhet[];
    åpneVedFørsteBesøk?: boolean;
}

const Nytt: FunctionComponent<Props> = (props) => {
    const { navn, nyheter, åpneVedFørsteBesøk = false, ...popoverProps } = props;

    const [popoverAnker, setPopoverAnker] = useState<HTMLElement | undefined>();
    const [erÅpnet, setErÅpnet] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const onFørsteBesøk = () => {
        if (åpneVedFørsteBesøk) {
            toggleNyheter();
        }
    };

    const [harUlesteNyheter, markerSomLest] = useHarUlesteNyheter(nyheter, onFørsteBesøk);

    const toggleNyheter = () => {
        if (popoverAnker) {
            setPopoverAnker(undefined);
        } else if (buttonRef.current) {
            setPopoverAnker(buttonRef.current);

            if (!erÅpnet) {
                setErÅpnet(true);
            }
        }
    };

    useEffect(() => {
        if (erÅpnet) {
            markerSomLest();
        }
    }, [erÅpnet]);

    return (
        <div className="nytt">
            <button ref={buttonRef} onClick={toggleNyheter} className="nytt__knapp">
                <Ikon navn={navn} />
                {harUlesteNyheter && <div className="nytt__notifikasjon" />}
            </button>
            <Popover
                ankerEl={popoverAnker}
                avstandTilAnker={16}
                onRequestClose={() => setPopoverAnker(undefined)}
                orientering={PopoverOrientering.Under}
                {...popoverProps}>
                <div className="nytt__popover">
                    <Element tag="h2" className="nytt__tittel">
                        Nytt i {navn}
                    </Element>
                    <section className="nytt__nyheter">
                        {nyheter.map((nyhet) => (
                            <Artikkel key={`${nyhet.dato}-${nyhet.tittel}`} nyhet={nyhet} />
                        ))}
                    </section>
                </div>
            </Popover>
        </div>
    );
};

export default Nytt;
