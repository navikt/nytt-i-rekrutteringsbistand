import React, { FunctionComponent, ReactNode, useState, useEffect } from 'react';
import { Element } from 'nav-frontend-typografi';
import Popover, { PopoverOrientering } from 'nav-frontend-popover';

import Artikkel from './Artikkel';
import './Nytt.less';
import useHarUlesteNyheter from './useHarUlesteNyheter';
import Ikon from './Ikon';

export type Nyhet = {
    dato: Date;
    tittel: string;
    innhold: ReactNode;
};

type Props = {
    navn: string;
    nyheter: Nyhet[];
};

const Nytt: FunctionComponent<Props> = ({ navn, nyheter }) => {
    const [popoverAnker, setPopoverAnker] = useState<HTMLElement | undefined>();
    const [erÅpnet, setErÅpnet] = useState<boolean>(false);
    const [harUlesteNyheter, markerSomLest] = useHarUlesteNyheter(nyheter);

    const onNotifikasjonClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (popoverAnker) {
            setPopoverAnker(undefined);
        } else {
            setPopoverAnker(e.currentTarget);
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
            <button onClick={onNotifikasjonClick} className="nytt__knapp">
                <Ikon navn={navn} />
                {harUlesteNyheter && <div className="nytt__notifikasjon" />}
            </button>
            <Popover
                utenPil
                ankerEl={popoverAnker}
                avstandTilAnker={16}
                onRequestClose={() => setPopoverAnker(undefined)}
                orientering={PopoverOrientering.Under}>
                <div className="nytt__popover">
                    <Element tag="h2" className="nytt__tittel">
                        Nytt fra {navn}
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
