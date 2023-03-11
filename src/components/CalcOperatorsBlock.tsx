import styled from 'styled-components';
import CalcButton from './CalcButton';

export default function CalcOpeartorsBlock() {
  return (
    <Root>
      <CalcButton>/</CalcButton>
      <CalcButton>x</CalcButton>
      <CalcButton>-</CalcButton>
      <CalcButton>+</CalcButton>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  padding: 4px;
`;
