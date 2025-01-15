import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  //   문제 1: 입력 값 출력하기 form 을 출력하기 출력용 state 선언
  const [outForm, setOutForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;
  //   문제 1: 입력 값 출력하기 form 을 출력하기 출력용 state 에서 각각을 꺼내서 변수에 할당
  const { username: outusername, message: outmessage } = outForm;

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  //   문제 1: 입력 값 출력하기 form 을 출력하기 form 을 옮기고 form 은 초기화
  const onClick = () => {
    // 문제 2: 입력 값 검증하기 삼항연산자로 체크
    username && message ? setOutForm(form) : alert('모든 값을 입력해주세요');
    setForm({
      username: '',
      message: '',
    });
  };

  // 문제 3: 입력 필드 초기화 버튼 추가하기
  const onClickReset = () => {
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 실습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
      <button onClick={onClickReset}>초기화</button>
      {/* 문제 1: 입력 값 출력하기 출력할 h2 태그 */}
      <h2>
        username: {outusername} / message: {outmessage}
      </h2>
    </div>
  );
};

export default EventPractice;
