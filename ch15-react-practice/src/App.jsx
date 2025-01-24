import {} from 'react';
import './App.css';
import ColorBox from './components/ColorBox';
import SelectColors from './components/SelectColors';
import ColorContext, { ColorProvider } from './contexts/color';

function App() {
  return (
    <>
      <h1>CH15. context API</h1>
      <ColorProvider>
        <div>
          <SelectColors />
          <ColorBox />
        </div>
      </ColorProvider>
    </>
  );
}

export default App;
