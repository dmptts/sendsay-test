import styled from 'styled-components';
import { CalcBlocks } from '../const';
import CalcDigitsBlock from './CalcDigitsBlock';
import CalcDisplay from './CalcDisplay';
import EqualButton from './CalcEqualBtn';
import CalcOpeartorsBlock from './CalcOperatorsBlock';
import PaletteElement from './PaletteElement';

export default function Palette() {
  return (
    <Root>
      <PaletteElement name={CalcBlocks.DISPLAY}>
        <CalcDisplay />
      </PaletteElement>
      <PaletteElement name={CalcBlocks.OPERATORS}>
        <CalcOpeartorsBlock />
      </PaletteElement>
      <PaletteElement name={CalcBlocks.DIGITS}>
        <CalcDigitsBlock />
      </PaletteElement>
      <PaletteElement name={CalcBlocks.EQUAL}>
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
