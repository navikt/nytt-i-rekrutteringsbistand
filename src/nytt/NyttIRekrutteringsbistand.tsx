import React, { FunctionComponent } from 'react';
import { PopoverProps } from 'nav-frontend-popover';
import Nytt from './Nytt';
import nyheter from './nyheter';

type Props = Partial<PopoverProps> & {
    onÅpneNyheter?: (antallUlesteNyheter: number) => void;
};

const NyttIRekrutteringsbistand: FunctionComponent<Props> = ({
    onÅpneNyheter,
    ...popoverProps
}: Props) => (
    <Nytt
        åpneVedFørsteBesøk
        onÅpneNyheter={onÅpneNyheter}
        navn="Rekrutteringsbistand"
        nyheter={nyheter}
        {...popoverProps}
    />
);

export default NyttIRekrutteringsbistand;
