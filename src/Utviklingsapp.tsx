import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { Sidetittel } from 'nav-frontend-typografi';
import NyttIRekrutteringsbistand from './nytt/NyttIRekrutteringsbistand';
import './Utviklingsapp.less';

const Utviklingsapp: FunctionComponent = () => {
    return (
        <main className="utviklingsapp">
            <Sidetittel className="utviklingsapp__tittel">Utviklingsapp</Sidetittel>
            <NyttIRekrutteringsbistand />
        </main>
    );
};

render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
