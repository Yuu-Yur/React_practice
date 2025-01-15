import React, { useState } from 'react';

const LogIn = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const { username, password } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    // 문제 2: 입력 값 검증하기 삼항연산자로 체크
    username && password
      ? alert('로그인에 성공했습니다. 메인화면으로 이동합니다!')
      : alert('모든 값을 입력해주세요');
    setForm({
      username: '',
      password: '',
    });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>로그인 화면</h1>
      <input
        type="text"
        name="username"
        placeholder="아이디를 입력해 주세요"
        value={username}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해 주세요"
        value={password}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default LogIn;
