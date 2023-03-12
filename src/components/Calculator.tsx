import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/useAppSelector';
import { CalcBlocks, CalculatorOperations } from './../const';

interface ICalculatorProps {
  className?: string;
}

export default function Calculator({ className }: ICalculatorProps) {
  const calcBlocks = useAppSelector((state) => state.canvas.elements);
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

  const renderCalcBlock = (block: {
    name: CalcBlocks;
    children: ReactElement;
  }) => {
    switch (block.name) {
      case CalcBlocks.DISPLAY:
        return React.cloneElement(block.children, {
          displayValue,
        });
      case CalcBlocks.OPERATORS:
        return React.cloneElement(block.children, {
          handleButtonClick: handleOperatorButtonClick,
        });
      case CalcBlocks.DIGITS:
        return React.cloneElement(block.children, {
          handleDigitButtonClick,
          handleDotButtonClick,
        });
      case CalcBlocks.EQUAL:
        return React.cloneElement(block.children, {
          handleEqualButtonClick,
        });
      default:
        break;
    }
  };

  return (
    <Root className={className}>
      {calcBlocks.map((calcBlock) =>
        renderCalcBlock(
          calcBlock as { name: CalcBlocks; children: ReactElement }
        )
      )}
    </Root>
  );
}

const Root = styled.div`
  width: 243px;
`;
