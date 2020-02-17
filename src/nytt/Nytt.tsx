import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Element } from 'nav-frontend-typografi';
import Popover, { PopoverOrientering } from 'nav-frontend-popover';

import Artikkel from './Artikkel';
import './Nytt.less';

export type Nyhet = {
    dato: Date;
    tittel: string;
    innhold: ReactNode;
};

type Props = {
    nyheter: Nyhet[];
};

const Nytt: FunctionComponent<Props> = ({ nyheter }) => {
    const [anker, setAnker] = useState<HTMLElement | undefined>();

    const onNotifikasjonClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnker(anker ? undefined : e.currentTarget);
    };

    return (
        <div className="nytt">
            <button onClick={onNotifikasjonClick} className="nytt__notifikasjon">
                Nytt
            </button>
            <Popover
                utenPil
                ankerEl={anker}
                avstandTilAnker={16}
                onRequestClose={() => setAnker(undefined)}
                orientering={PopoverOrientering.Under}>
                <div className="nytt__popover">
                    <Element tag="h2" className="nytt__tittel">
                        Nytt fra rekrutteringsbistand
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
