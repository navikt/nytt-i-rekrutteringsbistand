import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import Nytt from './nytt/Nytt';

const nyheter = [
    {
        tittel: 'Dette er en nyhet!',
        innhold: 'Dette er litt innhold!'
    }
];

const Utviklingsapp: FunctionComponent = () => {
    return <Nytt nyheter={nyheter} />;
};

render(<Utviklingsapp />, document.getElementById('utviklingsapp'));
