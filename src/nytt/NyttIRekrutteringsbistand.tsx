import React, { FunctionComponent } from 'react';
import { PopoverProps } from 'nav-frontend-popover';
import Nytt from './Nytt';

const tilDato = (dag: number, måned: number, år: number, timer: number = 0, minutter: number = 0) =>
    new Date(år, måned - 1, dag, timer, minutter);

const nyheter = [
    {
        dato: tilDato(20, 4, 2020),
        tittel: 'Nå kan du søke etter kandidater som har fersk arbeidserfaring',
        innhold:
            'I kandidatsøket har det kommet et nytt filter. I filteret legger du inn yrket som kandidatene skal ha arbeidserfaringen innen, og velger hvor fersk arbeidserfaringen skal være. Du kan velge om du vil se kandidater som har arbeidserfaring fra siste to år, siste fem år eller selv velge antall år med fersk arbeidserfaring.'
    },
    {
        dato: tilDato(7, 4, 2020),
        tittel: 'Nye filtreringsmuligheter i kandidatsøket',
        innhold: (
            <>
                <p>
                    I kandidatsøket i rekrutteringsbistand er det kommet to nye
                    filtreringsmuligheter.
                </p>
                <h3>Permitterte</h3>
                <p>
                    Det er mulig å søke frem kandidater som er permitterte. Informasjon om
                    permittering hentes fra situasjonen brukerne oppga i registreringen.
                </p>
                <h3>Tilgjengelighet</h3>
                <p>
                    Du kan filtrere på når kandidatene er ledig. Informasjon om tilgjengelighet
                    hentes fra jobbprofilen. Du kan filtrere på om brukerne har registrert om er
                    ledig nå, om tre måneder eller etter nærmere avtale.
                </p>
            </>
        )
    },
    {
        dato: tilDato(6, 4, 2020),
        tittel: 'Nå kan du slette kandidater fra en kandidatliste',
        innhold:
            'Kandidater som slettes blir arkivert, og du kan enkelt søke frem en oversikt over hvilke kandidater som er slettet. Det er også mulig å angre sletting, og flytte kandidaten tilbake på kandidatlisten.'
    },
    {
        dato: tilDato(3, 4, 2020),
        tittel: 'Rekrutteringsbistand på Yammer',
        innhold:
            'Rekrutteringsbistand har egen gruppe på Yammer. Der kan behov for ny eller endret funksjonalitet i verktøyet meldes inn og bli diskutert. Feil i rekrutteringsbistand skal meldes i porten.'
    },
    {
        dato: tilDato(2, 4, 2020),
        tittel: 'Ny toppmeny i Rekrutteringsbistand',
        innhold:
            'I Rekrutteringsbistand er det nå samme dekoratør som i Modia personoversikt. Det vil si at du får tilgang til menyknappen og kan velge enhet. Det gjør det lettere å gå mellom de ulike systemene.'
    },
    {
        dato: tilDato(31, 3, 2020),
        tittel: 'Nå kan du lettere finne kandidater til viktige bransjer under koronasituasjonen',
        innhold: (
            <>
                <p>
                    Koronasituasjonen kan skape mangel på arbeidskraft til viktige oppgaver i
                    samfunnet.
                </p>
                <p>
                    For å bedre oversikt over hvor mange kandidater som kan, og har lyst til å jobbe
                    innen for eksempel helse og omsorg, er det laget predefinerte søk i
                    Rekrutteringsbistand for noen utvalgte bransjer.
                </p>
            </>
        )
    },
    {
        dato: tilDato(31, 3, 2020),
        tittel: 'Kopier lenken til en stilling',
        innhold:
            'Nederst på stilling under «Om annonsen» kan du nå kopiere lenken til stillingen. Du kan for eksempel sende den til en aktuell kandidat på e-post eller i dialogen slik at kandidaten kan vurdere om stillingen passer.'
    },
    {
        dato: tilDato(26, 3, 2020),
        tittel: 'Nå kan NAV varsle kandidater om stillinger på SMS',
        innhold: (
            <>
                <p>
                    Det er nå mulig å sende SMS til brukere som er tilknyttet en kandidatliste. Det
                    gjør at NAV enkelt kan varsle kandidater om stillinger hvor det haster å få
                    folk. SMS-varsling kan brukes både til offentlig utlyste stillinger og til
                    stillinger som er meldt direkte til NAV.
                </p>
                <p>
                    I SMS-meldingen vil det være link til den aktuelle stillingen slik at
                    kandidatene raskt kan se på og vurdere stillingen.
                </p>
                <p>
                    Les mer på{' '}
                    <a
                        href="https://navno.sharepoint.com/sites/intranett-prosjekter-og-utvikling/SitePages/SMS-varsling-til-personbrukere-om-stillinger.aspx"
                        target="_blank">
                        Navet
                    </a>
                </p>
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
