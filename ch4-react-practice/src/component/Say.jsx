import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('black');

  {
    /* 실습 예제 2 사용자 정의 메시지 입력받기 inputedMessage 정의 */
  }
  const [inputedMessage, setInputtedMessage] = useState('');

  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  {
    /* 실습 예제 1 새로운 메세지 추가하기 Listener method 정의 */
  }
  const onClickWelcome = () => setMessage('환영합니다!');

  {
    /* 실습 예제 2 사용자 정의 메시지 입력받기 버튼을 누르면 inputedMessage 를 message 에 할당
    inputedMessage 는 state 이기에 굳이 파라미터로 받을 필요 없음*/
  }
  const onClickMessage = () => setMessage(inputedMessage);

  return (
    <div>
      {/* 실습 예제 2 사용자 정의 메시지 입력받기 input받을때 inputedMessage 에 할당 */}
      <input type="text" onChange={(e) => setInputtedMessage(e.target.value)} />
      <button onClick={onClickMessage}>입력</button>

      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/* 실습 예제 1 새로운 메세지 추가하기 Listener 연결 */}
      <button onClick={onClickWelcome}>환영</button>

      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
      {/* 실습 예제 3: 색상 초기화 버튼 추가하기 */}
      <button style={{ color: 'black' }} onClick={() => setColor('black')}>
        초기화
      </button>
    </div>
  );
};

export default Say;
