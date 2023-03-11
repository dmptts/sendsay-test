import styled from 'styled-components';
import PaletteElement from './PaletteElement';

export default function Palette() {
  return (
    <Root>
      <PaletteElement name={'calc-display'} />
      <PaletteElement name={'calc-equal-btn'} />
      <PaletteElement name={'calc-button-block'} />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
