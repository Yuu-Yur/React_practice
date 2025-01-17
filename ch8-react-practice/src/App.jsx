import './App.css';
import React, { useState } from 'react';
import Counter from './component/Counter';
import Info from './component/info';
import CounterUseReducer from './component/CounterUseReducer';
import Average from './component/Average';
import Practice from './component/Practice';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1>CH8.HOOks</h1>
      {/* <Counter />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
      <CounterUseReducer />
      <Average /> */}
      <Practice />
    </div>
  );
};

export default App;
