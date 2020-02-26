import React, { FunctionComponent } from 'react';
import { PopoverProps } from 'nav-frontend-popover';
import Nytt from './Nytt';

const tilDato = (dag: number, måned: number, år: number) => new Date(år, måned - 1, dag);

const nyheter = [
    {
        dato: tilDato(26, 2, 2020),
        tittel: 'Endring av fornavn og etternavn',
        innhold:
            'I kandidatsøket vises nå etternavn før fornavn. På e-poster som automatisk sendes til arbeidsgiver har vi også endret rekkefølge. Nå vil fornavnet ditt vises før etternavnet.'
    },
    {
        dato: tilDato(26, 2, 2020),
        tittel: 'Vi har nå lansert «nytt i Rekrutteringsbistand»',
        innhold:
            'Her vil du få oversikt over nyheter og endringer som gjøres. Du vet at det har kommet en ny sak når ikonet har en blå sirkel.'
    }
];

type Props = Partial<PopoverProps>;

const NyttIRekrutteringsbistand: FunctionComponent<Props> = (popoverProps: Props) => (
    <Nytt åpneVedFørsteBesøk navn="Rekrutteringsbistand" nyheter={nyheter} {...popoverProps} />
);

export default NyttIRekrutteringsbistand;
