import styled from 'styled-components';
import { AppModes } from '../const';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAppMode } from '../store/selectors';

interface ICalcDisplayProps {
  displayValue?: string;
}

export default function CalcDisplay({ displayValue }: ICalcDisplayProps) {
  const appMode = useAppSelector(selectAppMode);
  return (
    <Root>
      <Display>{appMode === AppModes.RUNTIME ? displayValue : '0'}</Display>
    </Root>
  );
}

const Root = styled.div`
  padding: 4px;

  border-radius: 4px;
`;

const Display = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 52px;
  padding: 4px 8px;

  font-size: 2.25rem;
  font-weight: 800;

  border-radius: 6px;
  background-color: #f3f4f6;
`;
