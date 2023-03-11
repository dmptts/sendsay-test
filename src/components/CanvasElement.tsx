import { PropsWithChildren, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import { DnDItems } from '../const';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { reorder } from '../store/canvasSlice';

interface IConstructorElemProps {
  name: string;
  index: number;
}

export default function CanvasElement({
  children,
  name,
  index,
}: PropsWithChildren<IConstructorElemProps>) {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const [collected, drop] = useDrop({
    accept: DnDItems.CANVAS_ELEM,
    drop: (item: { name: string; index: number }) => {
      dispatch(reorder({ draggedIndex: item.index, droppedIndex: index }));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [, drag] = useDrag({
    type: DnDItems.CANVAS_ELEM,
    item: () => {
      return { name, index };
    },
  });

  drag(drop(ref));

  return (
    <Root ref={ref} $isOver={collected.isOver}>
      {children}
    </Root>
  );
}

const Root = styled.div<{ $isOver: boolean }>`
  position: relative;
  width: 240px;
  height: 60px;

  background-color: ${({ $isOver }) => ($isOver ? 'red' : 'lightgrey')};
`;
