import React, { FunctionComponent } from 'react';
import { PopoverProps } from 'nav-frontend-popover';
import Nytt from './Nytt';

const tilDato = (dag: number, måned: number, år: number) => new Date(år, måned - 1, dag);

const nyheter = [
    {
        dato: tilDato(26, 3, 2020),
        tittel: 'Nå kan NAV varsle kandidater om stillinger på SMS',
        innhold: (
            <>
                Det er nå mulig å sende SMS til brukere som er tilknyttet en kandidatliste. Det gjør at
                NAV enkelt kan varsle kandidater om stillinger hvor det haster å få folk.
                SMS-varsling kan brukes både til offentlig utlyste stillinger og til stillinger som
                er meldt direkte til NAV.
                <p>
                    I SMS-meldingen vil det være link til den aktuelle stillingen slik at
                    kandidatene raskt kan se på og vurdere stillingen.
                </p>
                Les mer på{' '}
                <a
                    href="https://navno.sharepoint.com/sites/intranett-prosjekter-og-utvikling/SitePages/SMS-varsling-til-personbrukere-om-stillinger.aspx"
                    target="_blank">
                    Navet
                </a>
            </>
        )
    },
    {
        dato: tilDato(28, 2, 2020),
        tittel: 'Enklere å skrive et notat',
        innhold:
            'Nå blir det enklere å skrive et notat om hvorfor brukeren passer til stillingen. Når du legger til en kandidat på en kandidatliste, får du mulighet til å opprette et notat.'
    },
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
