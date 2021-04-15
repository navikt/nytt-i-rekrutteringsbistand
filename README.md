# Nytt i rekrutteringsbistand

Vis endringer og andre nyheter i Rekrutteringsbistand-appene

## Bruk

### Installer komponenten

```sh
npm install @navikt/nytt-i-rekrutteringsbistand
```

### Importer komponenten og CSS

```js
import NyttIRekrutteringsbistand from '@navikt/nytt-i-rekrutteringsbistand';
import '../node_modules/@navikt/nytt-i-rekrutteringsbistand/lib/nytt.css';
```

Du er selv ansvarlig for å importere `nav-frontend-core` i din egen app. Nytt-i-rekrutteringsbistand antar at CSS-klasser og Less-variabler fra denne pakken er tilgjengelige.

## Utvikling

```sh
npm install
npm start
```

## Publisering på NPM

Taggede commits (`vX.Y.Z`) vil publiseres til NPM med Github Actions. For å opprette en tagget commit:

1. Oppgrader versjonsnummeret i package.json med `npm version patch/minor/major` (se https://docs.npmjs.com/cli/version). Bruk patch for små, non-breaking changes, minor for breaking changes og major for store oppgraderinger.
2. Commit, og opprett tag. Eksempel på tagging: git tag -a v1.2.16 -m "Legg til nyhet om aldersfilter"
3. Push den nye taggen (typ `git push origin vX.Y.Z`. Se `git tag` for liste over alle tagsene dine). _Dette trigger en publisering på Github Actions_.

Se [Workflows på GitHub](https://github.com/navikt/nytt-i-rekrutteringsbistand/actions) for byggstatus og [@navikt/nytt-i-rekrutteringsbistand på NPM](https://www.npmjs.com/package/@navikt/nytt-i-rekrutteringsbistand) for å sjekke om pakken ble publisert.

## Stack

### Bundling

Komponenten bygges med Webpack og Babel. Babel klarer å tolke TypeScript med `@babel/preset-typescript` og JSX med `@babel/preset-react` (se _babel.config.js_). Less kompileres til CSS og bundles sammen med JavaScript i _lib/nytt.css_. Babel klarer ikke å generere deklarasjonsfiler for TypeScript, så vi gjør dette i et eget steg som en del av bygget.

### Utvikling

Under utvikling (`npm start`) bygges appen med Parcel og en egen TypeScript-konfigurasjonsfil.
