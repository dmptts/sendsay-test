import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import Container from './components/Container';
import Palette from './components/Palette';
import Canvas from './components/Canvas';
import AppModeToggler from './components/AppModeToggler';
import { useAppSelector } from './hooks/useAppSelector';
import { selectAppMode } from './store/selectors';
import { AppModes } from './const';
import Calculator from './components/Calculator';

export default function App() {
  const appMode = useAppSelector(selectAppMode);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <StyledContainer>
          <Palette />
          <div>
            <AppModeToggler />
            {appMode === AppModes.CONSTRUCTOR ? <Canvas /> : <Calculator />}
          </div>
        </StyledContainer>
      </div>
    </DndProvider>
  );
}

const StyledContainer = styled(Container)`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 56px; */
  display: flex;

  column-gap: 56px;

  padding-top: 38px;
  padding-bottom: 86px;
`;
