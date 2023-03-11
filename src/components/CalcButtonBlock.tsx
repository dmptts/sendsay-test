import styled from 'styled-components';
import CalcButton from './CalcButton';

export default function CalcButtonBlock() {
  return (
    <Root>
      <CalcButton>1</CalcButton>
      <CalcButton>2</CalcButton>
      <CalcButton>3</CalcButton>
      <CalcButton>4</CalcButton>
      <CalcButton>5</CalcButton>
      <CalcButton>6</CalcButton>
      <CalcButton>7</CalcButton>
      <CalcButton>8</CalcButton>
      <CalcButton>9</CalcButton>
      <CalcButton width={2}>0</CalcButton>
      <CalcButton>,</CalcButton>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  padding: 4px;
`;
