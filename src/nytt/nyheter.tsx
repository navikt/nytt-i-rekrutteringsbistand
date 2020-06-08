import React from 'react';

const tilDato = (dag: number, måned: number, år: number, timer: number = 0, minutter: number = 0) =>
    new Date(år, måned - 1, dag, timer, minutter);

const nyheter = [
    {
        dato: tilDato(8, 6, 2020),
        tittel: 'Nå kan du søke etter en kandidat',
        innhold:
            'Øverst i kandidatsøket i fritekstsøket, kan du nå søke på fødselsnummer og få treff på kandidaten du leter etter. Du vil kun få treff på kandidater som er synlige i Rekrutteringsbistand.',
    },
    {
        dato: tilDato(4, 6, 2020),
        tittel: 'Filtrering på alder',
        innhold:
            'I kandidatsøket har du nå mulighet til å filtrere på alder. Du legger selv inn hvilket aldersintervall du vil ha i søket. Det gir en ny mulighet til målrettede søk etter kandidater innenfor prioriterte målgrupper.',
    },
    {
        dato: tilDato(25, 5, 2020),
        tittel: 'Historikk og filtrering på utfall i en kandidatliste',
        innhold: (
            <>
                <p>
                    På CV-visningen har det nå kommet en ny fane som heter historikk. Her kan du se
                    hvilke kandidatlister en kandidat er lagt på, hvilken status kandidaten har og
                    om han eller hun har blitt presentert for arbeidsgiver. Historikken vil hjelper
                    deg til å få god oversikt over den enkelte kandidat.
                </p>
                <p>
                    Du har også fått mulighet til å filtrere en kandidatliste på utfall (ikke
                    presentert og presentert). Dermed kan du filtrere en kandidatliste både på
                    status og på utfall.
                </p>
            </>
        ),
    },
    {
        dato: tilDato(20, 5, 2020),
        tittel: 'Filtrering på status i en kandidatliste',
        innhold: (
            <>
                <p>
                    Nå kan du filtrere på status i en kandidatliste. Det hjelper deg til å ha
                    oversikt over mange kandidater som har status; vurderes, aktuell, ikke aktuell
                    eller ikke interessert.
                </p>
                <p>
                    Øverst i en kandidatliste som er tilknyttet en stilling, får du i tillegg
                    informasjon om hvor mange som har status aktuell og hvor mange som er presentert
                    for arbeidsgiver.
                </p>
            </>
        ),
    },
    {
        dato: tilDato(18, 5, 2020),
        tittel: 'Nå kan du se hvilke kandidater som allerede ligger i kandidatlisten',
        innhold:
            'Om du kommer til kandidatsøket via en kandidatliste eller en stilling, vil du nå se et nytt ikon. Dette ikonet forteller deg at kandidaten allerede ligger i kandidatlisten, og du trenger ikke bruke tid på kandidater du allerede har vurdert som aktuelle.',
    },
    {
        dato: tilDato(11, 5, 2020),
        tittel: 'Nye endringer',
        innhold: (
            <>
                <h3>Tilpassing til små skjermer</h3>
                <p>
                    Rekrutteringsbistand fungerer nå bedre på mindre skjermer. Vi har gjort
                    justeringer på blant annet kandidatlister og registrering av stilling. I tillegg
                    er kontrasten på teksten forbedret.
                </p>
                <h3>Ny knapp - kopier stilingslenke</h3>
                <p>
                    På en stilling kan du kopiere en lenke til stillingsannonsen. «Kopier
                    stillingslenke» har tidligere vært tilgjengelig lenger nede på stillingen, men
                    er nå flyttet og står ved siden av «Rediger stilling» og «Skriv ut».
                </p>
                <h3>«Til toppen» pil er lagt til på kandidatsøk og kandidatlister</h3>
                <p>Dette gjør at du ikke trenger å skrolle like mye.</p>
                <h3>
                    Ny kolonne i kandidatlisten som viser når (hvilken dato) en kandidat ble lagt
                    til listen
                </h3>
                <h3>Link fra CV til kandidatliste</h3>
                <p>
                    Når du har lagt en kandidat i en kandidatliste fra CV-visning, kan du nå gå
                    direkte til kandidatlisten.
                </p>
            </>
        ),
    },
    {
        dato: tilDato(27, 4, 2020),
        tittel: 'Nå kan du registrere kandidater som midlertidig utilgjengelig',
        innhold: (
            <>
                <p>
                    For å få bedre oversikt over hvilke kandidater som er tilgjengelig for jobb, har
                    du mulighet til å registrere kandidater som utilgjengelig for en periode i
                    CV-visningen i Rekrutteringsbistand. Du kan maksimalt sette personer som
                    utilgjengelig i en måned.
                </p>
                <p>
                    Status som midlertidig utilgjengelig skal kun skal settes i dialog med bruker,
                    og kandidaten skal informeres om at hun/han får denne statusen. Statusen vil
                    kunne ses av alle som bruker kandidatsøket og årsak til utilgjengelighet skal
                    ikke oppgis.
                </p>
                <p>
                    Etterhvert vil du også kunne filtrere på kandidater som har status som
                    midlertidig utilgjengelig.
                </p>
            </>
        ),
    },
    {
        dato: tilDato(27, 4, 2020),
        tittel: 'Søk på navn i en kandidatliste',
        innhold:
            'Nå kan du søke på navn i en kandidatliste. Det gjør at du lettere kan finne igjen personer som er lagt på en kandidatliste.',
    },
    {
        dato: tilDato(22, 4, 2020),
        tittel: 'Informasjon om kandidatens veileder',
        innhold:
            'Nå kan du se hvem som er kandidaten sin veileder fra Rekrutteringsbistand. Informasjon om veileder finner du i CV-visningen på kandidaten.',
    },
    {
        dato: tilDato(20, 4, 2020),
        tittel: 'Nå kan du søke etter kandidater som har fersk arbeidserfaring',
        innhold:
            'I kandidatsøket har det kommet et nytt filter. I filteret legger du inn yrket som kandidatene skal ha arbeidserfaringen innen, og velger hvor fersk arbeidserfaringen skal være. Du kan velge om du vil se kandidater som har arbeidserfaring fra siste to år, siste fem år eller selv velge antall år med fersk arbeidserfaring.',
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
        ),
    },
    {
        dato: tilDato(6, 4, 2020),
        tittel: 'Nå kan du slette kandidater fra en kandidatliste',
        innhold:
            'Kandidater som slettes blir arkivert, og du kan enkelt søke frem en oversikt over hvilke kandidater som er slettet. Det er også mulig å angre sletting, og flytte kandidaten tilbake på kandidatlisten.',
    },
    {
        dato: tilDato(3, 4, 2020),
        tittel: 'Rekrutteringsbistand på Yammer',
        innhold:
            'Rekrutteringsbistand har egen gruppe på Yammer. Der kan behov for ny eller endret funksjonalitet i verktøyet meldes inn og bli diskutert. Feil i rekrutteringsbistand skal meldes i porten.',
    },
    {
        dato: tilDato(2, 4, 2020),
        tittel: 'Ny toppmeny i Rekrutteringsbistand',
        innhold:
            'I Rekrutteringsbistand er det nå samme dekoratør som i Modia personoversikt. Det vil si at du får tilgang til menyknappen og kan velge enhet. Det gjør det lettere å gå mellom de ulike systemene.',
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
        ),
    },
    {
        dato: tilDato(31, 3, 2020),
        tittel: 'Kopier lenken til en stilling',
        innhold:
            'Nederst på stilling under «Om annonsen» kan du nå kopiere lenken til stillingen. Du kan for eksempel sende den til en aktuell kandidat på e-post eller i dialogen slik at kandidaten kan vurdere om stillingen passer.',
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
        ),
    },
    {
        dato: tilDato(28, 2, 2020),
        tittel: 'Enklere å skrive et notat',
        innhold:
            'Nå blir det enklere å skrive et notat om hvorfor brukeren passer til stillingen. Når du legger til en kandidat på en kandidatliste, får du mulighet til å opprette et notat.',
    },
    {
        dato: tilDato(26, 2, 2020),
        tittel: 'Endring av fornavn og etternavn',
        innhold:
            'I kandidatsøket vises nå etternavn før fornavn. På e-poster som automatisk sendes til arbeidsgiver har vi også endret rekkefølge. Nå vil fornavnet ditt vises før etternavnet.',
    },
    {
        dato: tilDato(26, 2, 2020),
        tittel: 'Vi har nå lansert «nytt i Rekrutteringsbistand»',
        innhold:
            'Her vil du få oversikt over nyheter og endringer som gjøres. Du vet at det har kommet en ny sak når ikonet har en blå sirkel.',
    },
];

export default nyheter;