import React, { FunctionComponent } from 'react';
import { Nyhet } from './Nytt';
import { EtikettLiten, Undertittel, Normaltekst } from 'nav-frontend-typografi';

const printDato = (dato: Date) =>
    dato.toLocaleDateString
        ? dato.toLocaleDateString('no-NB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
          })
        : dato.toISOString();

interface Props {
    nyhet: Nyhet;
}

const Artikkel: FunctionComponent<Props> = ({ nyhet }) => {
    return (
        <article className="nytt__artikkel">
            <EtikettLiten className="nytt__artikkeldato">{printDato(nyhet.dato)}</EtikettLiten>
            <Undertittel className="nytt__artikkeltittel">{nyhet.tittel}</Undertittel>
            <Normaltekst className="nytt__artikkelinnhold" tag="section">
                {nyhet.innhold}
            </Normaltekst>
        </article>
    );
};

export default Artikkel;
