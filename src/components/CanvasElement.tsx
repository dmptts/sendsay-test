import { PropsWithChildren, ReactNode, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled from 'styled-components';
import { DnDItems } from '../const';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { insertElement, removeElement, reorder } from '../store/canvasSlice';
import Separator from './Separator';

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
    accept: [DnDItems.CANVAS_ELEM, DnDItems.PALETTE_ELEM],
    drop: (
      item: { name: string; children: ReactNode; index: number },
      monitor
    ) => {
      if (monitor.getItemType() === DnDItems.PALETTE_ELEM) {
        dispatch(
          insertElement({
            item: {
              name: item.name,
              children: item.children,
            },
            targetIndex: index,
          })
        );
      } else {
        dispatch(reorder({ draggedIndex: item.index, droppedIndex: index }));
      }
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

  const handleDoubleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      dispatch(removeElement(index));
    }
  };

  drag(drop(ref));

  return (
    <Root ref={ref} $isOver={collected.isOver} onClick={handleDoubleClick}>
      <StyledSeparator $isOver={collected.isOver} />
      {children}
    </Root>
  );
}

const Root = styled.div<{ $isOver: boolean }>`
  position: relative;
  width: 243px;
`;

const StyledSeparator = styled(Separator)<{ $isOver: boolean }>`
  display: ${({ $isOver }) => ($isOver ? 'block' : 'none')};
`;
