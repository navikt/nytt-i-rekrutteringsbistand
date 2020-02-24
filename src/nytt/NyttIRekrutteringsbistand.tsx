import React, { FunctionComponent } from 'react';
import { PopoverOrientering } from 'nav-frontend-popover';
import Nytt from './Nytt';

const tilDato = (dag: number, måned: number, år: number) => new Date(år, måned - 1, dag);

const nyheter = [
    {
        dato: tilDato(23, 2, 2020),
        tittel: 'Vi har nå lansert endringsloggen!',
        innhold: 'Her vil du få oversikt over nyheter og endringer i Rekrutteringsbistand.'
    }
];

const NyttIRekrutteringsbistand: FunctionComponent = () => (
    <Nytt
        navn="Rekrutteringsbistand"
        nyheter={nyheter}
        orientering={PopoverOrientering.UnderVenstre}
    />
);

export default NyttIRekrutteringsbistand;
