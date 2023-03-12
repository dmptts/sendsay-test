import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface IToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  value: string | number;
  isActive?: boolean;
  changeActive?: () => void;
  callback?: () => void;
}

export default function ToggleButton({
  children,
  className,
  value,
  isActive = false,
  changeActive,
  callback,
  ...rest
}: PropsWithChildren<IToggleButtonProps>) {
  const handleClick = () => {
    changeActive?.();
    callback?.();
  };

  return (
    <Root
      type="button"
      value={value}
      $isActive={isActive}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Root>
  );
}

const Root = styled.button<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  column-gap: 8px;

  padding: 8px 12px;

  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--color-default-white)' : 'transparent'};
  border: ${({ $isActive }) =>
    $isActive ? '1px solid #e2e3e5' : '1px solid transparent'};
  border-radius: 5px;
  cursor: pointer;

  svg {
    stroke: ${({ $isActive }) =>
      $isActive ? 'var(--color-accent)' : '#4d5562'};
  }
`;
