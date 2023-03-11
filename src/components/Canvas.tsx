import { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { DnDItems } from '../const';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { addElement } from '../store/canvasSlice';
import CanvasElement from './CanvasElement';

export default function Canvas() {
  const dispatch = useAppDispatch();
  const elements = useAppSelector((state) => state.canvas.elements);

  const [, drop] = useDrop(() => ({
    accept: DnDItems.PALETTE_ELEM,
    drop: (item: ReactNode) => {
      dispatch(addElement(item));
    },
  }));

  return (
    <Root ref={drop}>
      {elements &&
        elements.map((elem, i) => (
          <CanvasElement name={elem.name} index={i} key={i}>
            {elem.children}
          </CanvasElement>
        ))}
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 243px;
  height: 448px;

  border: 1px solid black;
`;
