import React, { useReducer } from 'react';

// 1. reducer(state, action) 정의 , 즉 state 의 setter
function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const CounterUseReducer = () => {
  // 2. useReducer(reducer 함수, 초기값)
  // 반환하는 값은 state, 와 state를 업데이트하는 dispatch 함수를 반환, 여기서 첫번째 반환값인 state 를 reducer 함수의 첫번째 parameter 가 받음
  // useState(초기값) 이 state 와 state 를 업데이트 하는 setter 를 반환하는 것과 같음
  // 단 state 를 업데이트 하는 dispatch 함수는 parameter 로 action 을 가짐 이것을 reducer 함수의 두번째 parameter 가 받음
  const [state, dispatch] = useReducer(reducer, {
    value: 0, // state 의 초기값
  });

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* 3. dispatch는 reducer 라고 볼 수 있음 단, parameter 에서 state 는 빼야함,  */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  );
};

export default CounterUseReducer;
