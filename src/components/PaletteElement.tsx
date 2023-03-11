import { useDrag } from 'react-dnd';
import styled from 'styled-components';
import { DnDItems } from '../const';
import { useAppSelector } from '../hooks/useAppSelector';

interface IElementProps {
  name: string;
}

export default function PaletteElement({ name }: IElementProps) {
  const elements = useAppSelector((state) => state.canvas.elements);
  const isUsed = elements.findIndex((elem) => elem.name === name) >= 0;

  const [, drag] = useDrag(() => ({
    type: DnDItems.PALETTE_ELEM,
    item: { name },
  }));

  return (
    <Root ref={!isUsed ? drag : null} $isUsed={isUsed}>
      {name}
    </Root>
  );
}

const Root = styled.div<{ $isUsed: boolean }>`
  width: 240px;
  height: 60px;

  background-color: lightgrey;
  ${({ $isUsed }) => $isUsed && 'opacity: 0.5'}
`;
