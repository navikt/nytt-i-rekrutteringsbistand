import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Normaltekst, Undertittel, Element, EtikettLiten } from 'nav-frontend-typografi';
import Popover, { PopoverOrientering } from 'nav-frontend-popover';
import './Nytt.less';

const ANKER = 'nytt-anker';

const printDato = (dato: Date) => dato.toLocaleDateString();

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
        <div id={ANKER} className="nytt">
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
                            <article
                                key={nyhet.dato.toISOString + nyhet.tittel}
                                className="nytt__artikkel">
                                <EtikettLiten className="nytt__artikkeldato">
                                    {printDato(nyhet.dato)}
                                </EtikettLiten>
                                <Undertittel className="nytt__artikkeltittel">
                                    {nyhet.tittel}
                                </Undertittel>
                                <Normaltekst>{nyhet.innhold}</Normaltekst>
                            </article>
                        ))}
                    </section>
                </div>
            </Popover>
        </div>
    );
};

export default Nytt;
