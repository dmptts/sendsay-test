import styled from 'styled-components';
import { CalculatorOperations } from '../const';
import CalcButton from './CalcButton';

interface ICalcOpeartorsBlockProps {
  handleButtonClick?: (operator: keyof typeof CalculatorOperations) => void;
}

export default function CalcOpeartorsBlock({
  handleButtonClick,
}: ICalcOpeartorsBlockProps) {
  return (
    <Root>
      <CalcButton onClick={() => handleButtonClick?.('/')}>/</CalcButton>
      <CalcButton onClick={() => handleButtonClick?.('*')}>x</CalcButton>
      <CalcButton onClick={() => handleButtonClick?.('-')}>-</CalcButton>
      <CalcButton onClick={() => handleButtonClick?.('+')}>+</CalcButton>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  padding: 4px;
`;
