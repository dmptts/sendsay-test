import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
import Palette from './components/Palette';
import Canvas from './components/Canvas';

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Root className="App">
        <Palette />
        <Canvas />
      </Root>
    </DndProvider>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 56px;
`;
