import { useState } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import CalcDisplay from './CalcDisplay';
import CalcOpeartorsBlock from './CalcOperatorsBlock';
import CalcDigitsBlock from './CalcDigitsBlock';
import CalcEqualButton from './CalcEqualBtn';
import { CalculatorOperations } from './../const';

export default function Calculator() {
  // const calcElements = useAppSelector((state) => state.canvas.elements);
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [currentOperator, setCurrentOperator] = useState<
    keyof typeof CalculatorOperations | null
  >(null);
  const [isWaitingOperator, setIsWaitingOperator] = useState(true);

  const handleDigitButtonClick = (digit: string) => {
    setDisplayValue(
      displayValue === '0' || !isWaitingOperator ? digit : displayValue + digit
    );
    !isWaitingOperator && setIsWaitingOperator(true);
  };

  const handleDotButtonClick = () => {
    setDisplayValue(displayValue + '.');
  };

  const handleOperatorButtonClick = (
    operator: keyof typeof CalculatorOperations
  ) => {
    setIsWaitingOperator(false);
    if (currentOperator && prevValue) {
      const result = CalculatorOperations[currentOperator](
        prevValue,
        +displayValue
      );
      setDisplayValue(String(result));
      setPrevValue(result);
      return;
    }
    setCurrentOperator(operator);
    setPrevValue(+displayValue);
  };

  const handleEqualButtonClick = () => {
    isWaitingOperator && setIsWaitingOperator(false);
    if (currentOperator && prevValue) {
      const result = CalculatorOperations[currentOperator](
        prevValue,
        +displayValue
      );
      setDisplayValue(String(result));
      setPrevValue(result);
      setCurrentOperator(null);
    }
  };

  // return <div>{calcElements.map((elem) => elem.children)}</div>;
  return (
    <div>
      <CalcDisplay displayValue={displayValue} />
      <CalcOpeartorsBlock handleButtonClick={handleOperatorButtonClick} />
      <CalcDigitsBlock
        handleDigitButtonClick={handleDigitButtonClick}
        handleDotButtonClick={handleDotButtonClick}
      />
      <CalcEqualButton handleEqualButtonClick={handleEqualButtonClick} />
    </div>
  );
}
