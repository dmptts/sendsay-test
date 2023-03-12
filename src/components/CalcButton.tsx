import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ICalcButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number;
  height?: number;
}

export default function CalcButton({
  children,
  className,
  width = 1,
  height = 1,
  ...rest
}: PropsWithChildren<ICalcButtonProps>) {
  return (
    <Root
      type="button"
      $width={width}
      $height={height}
      className={className}
      {...rest}
    >
      {children}
    </Root>
  );
}

const Root = styled.button<{ $width: number; $height: number }>`
  grid-column: ${({ $width }) => `span ${$width}`};
  grid-row: ${({ $height }) => `span ${$height}`};

  height: 48px;

  background-color: #fff;
  border: 1px solid #e2e3e5;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border: 2px solid #5d5fef;
  }

  &:active {
    color: #fff;

    background-color: #5d5fef;
    border: none;
  }
`;
