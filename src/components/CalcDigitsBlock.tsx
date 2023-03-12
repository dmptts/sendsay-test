import styled from 'styled-components';
import CalcButton from './CalcButton';

interface ICalcButtonBlock {
  handleDigitButtonClick?: (digit: string) => void;
  handleDotButtonClick?: () => void;
}

export default function CalcDigitsBlock({
  handleDigitButtonClick,
  handleDotButtonClick,
}: ICalcButtonBlock) {
  return (
    <Root>
      <CalcButton onClick={() => handleDigitButtonClick?.('1')}>1</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('2')}>2</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('3')}>3</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('4')}>4</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('5')}>5</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('6')}>6</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('7')}>7</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('8')}>8</CalcButton>
      <CalcButton onClick={() => handleDigitButtonClick?.('9')}>9</CalcButton>
      <CalcButton width={2} onClick={() => handleDigitButtonClick?.('0')}>
        0
      </CalcButton>
      <CalcButton onClick={() => handleDotButtonClick?.()}>,</CalcButton>
    </Root>
  );
}

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;

  padding: 4px;
`;
