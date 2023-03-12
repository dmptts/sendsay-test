import styled from 'styled-components';
import CalcDigitsBlock from './CalcDigitsBlock';
import CalcDisplay from './CalcDisplay';
import EqualButton from './CalcEqualBtn';
import CalcOpeartorsBlock from './CalcOperatorsBlock';
import PaletteElement from './PaletteElement';

export default function Palette() {
  return (
    <Root>
      <PaletteElement name={'calc-display'}>
        <CalcDisplay />
      </PaletteElement>
      <PaletteElement name={'calc-operators-block'}>
        <CalcOpeartorsBlock />
      </PaletteElement>
      <PaletteElement name={'calc-button-block'}>
        <CalcDigitsBlock />
      </PaletteElement>
      <PaletteElement name={'calc-equal-btn'}>
        <EqualButton />
      </PaletteElement>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
