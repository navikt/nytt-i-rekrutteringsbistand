import React, { FunctionComponent, ReactNode } from 'react';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';

export type Nyhet = {
    tittel: string;
    innhold: ReactNode;
};

type Props = {
    nyheter: Nyhet[];
};

const Nytt: FunctionComponent<Props> = (props) => {
    const { nyheter } = props;
    return (
        <div>
            <i>Nytt</i>
            {nyheter.map((nyhet) => (
                <article>
                    <Undertittel>{nyhet.tittel}</Undertittel>
                    <Normaltekst>{nyhet.innhold}</Normaltekst>
                </article>
            ))}
        </div>
    );
};

export default Nytt;
