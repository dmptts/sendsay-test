import styled from 'styled-components';

interface ISeparatorProps {
  className?: string;
}

export default function Separator({ className }: ISeparatorProps) {
  return <Root className={className} />;
}

const Root = styled.div`
  position: absolute;
  bottom: calc(100% + 4);
  left: 0;
  z-index: 1;

  width: 100%;
  height: 1px;

  background-color: var(--color-accent);

  &::before,
  &::after {
    position: absolute;
    top: -1.5px;

    width: 4px;
    height: 4px;

    background-color: var(--color-accent);

    transform: rotate(45deg);

    content: '';
  }

  &::before {
    left: -2px;
  }

  &::after {
    right: -2px;
  }
`;
