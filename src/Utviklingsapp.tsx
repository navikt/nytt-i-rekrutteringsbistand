import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import Nytt from './nytt/Nytt';
import { Sidetittel } from 'nav-frontend-typografi';
import './Utviklingsapp.less';

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

const Utviklingsapp: FunctionComponent = () => {
    return (
        <main className="utviklingsapp">
            <Sidetittel className="utviklingsapp__tittel">Utviklingsapp</Sidetittel>
            <Nytt nyheter={nyheter} />
        </main>
    );
};

render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
