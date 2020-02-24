import React, { FunctionComponent } from 'react';
import Nytt from './Nytt';

const nyheter = [
    {
        dato: new Date(),
        tittel: 'Dette er en nyhet!',
        innhold: 'Dette er litt innhold!'
    },
    {
        dato: new Date(),
        tittel: 'Dette er enda en nyhet!',
        innhold: (
            <span>
                Litt annerledes innhold her. Kanskje litt lengre tekst, til og med. Også kommer det
                plutselig <a href="www.nrk.no">en lenke</a>!
            </span>
        )
    }
];

const NyttIRekrutteringsbistand: FunctionComponent = () => (
    <Nytt navn="Rekrutteringsbistand" nyheter={nyheter} />
);

export default NyttIRekrutteringsbistand;
