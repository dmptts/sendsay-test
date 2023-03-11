import { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { DnDItems } from '../const';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { pushElement } from '../store/canvasSlice';
import CanvasElement from './CanvasElement';
import CanvasPlaceholder from './CanvasPlaceholder';
import Separator from './Separator';

export default function Canvas() {
  const dispatch = useAppDispatch();
  const elements = useAppSelector((state) => state.canvas.elements);
  const isEmpty = elements.length < 1;

  const [collected, drop] = useDrop(() => ({
    accept: DnDItems.PALETTE_ELEM,
    drop: (item: ReactNode, monitor) => {
      if (monitor.isOver({ shallow: true })) {
        dispatch(pushElement(item));
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver({ shallow: true }),
    }),
  }));

  return (
    <Root ref={drop} $canDrop={collected.canDrop} $isEmpty={isEmpty}>
      {elements.length > 0 ? (
        <>
          <Wrapper>
            {elements.map((elem, i) => (
              <CanvasElement name={elem.name} index={i} key={i}>
                {elem.children}
              </CanvasElement>
            ))}
            {!isEmpty && collected.isOver && <StyledSeparator />}
          </Wrapper>
        </>
      ) : (
        <CanvasPlaceholder />
      )}
    </Root>
  );
}

const Root = styled.div<{ $canDrop: boolean; $isEmpty: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${({ $isEmpty }) => ($isEmpty ? 'center' : 'flex-start')};
  align-items: center;
  row-gap: 10px;

  width: 243px;
  height: 448px;

  ${({ $canDrop, $isEmpty }) =>
    $canDrop && $isEmpty && 'background-color: #f0f9ff;'};
  ${({ $isEmpty }) =>
    $isEmpty &&
    `background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='6' ry='6' stroke='%23C4C4C4FF' stroke-width='2' stroke-dasharray='8%2c 5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 6px;
  `}
`;

const Wrapper = styled.div`
  position: relative;
`;

const StyledSeparator = styled(Separator)`
  top: calc(100% + 4px);
`;
