import { PropsWithChildren } from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { DnDItems } from '../const';
import { useAppSelector } from '../hooks/useAppSelector';

interface IElementProps {
  name: string;
}

export default function PaletteElement({
  children,
  name,
}: PropsWithChildren<IElementProps>) {
  const elements = useAppSelector((state) => state.canvas.elements);
  const isUsed = elements.findIndex((elem) => elem.name === name) >= 0;

  const [, drag] = useDrag(() => ({
    type: DnDItems.PALETTE_ELEM,
    item: { name, children },
  }));

  return (
    <Root ref={!isUsed ? drag : null} $isUsed={isUsed}>
      {children}
    </Root>
  );
}

const Root = styled.div<{ $isUsed: boolean }>`
  background-color: var(--color-default-white);
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  ${({ $isUsed }) => $isUsed && 'opacity: 0.5;'}
`;
