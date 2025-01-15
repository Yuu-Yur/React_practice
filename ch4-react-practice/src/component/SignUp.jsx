import React, { useState } from 'react';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { username, email, password, passwordConfirm } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onClick();
  };

  const onClick = () => {
    username &&
    email &&
    password &&
    passwordConfirm &&
    password === passwordConfirm
      ? alert('회원가입에 성공했습니다.')
      : alert('입력창이 비었거나 비밀번호와 비밀번호 확인이 맞지 않습니다.');
  };

  return (
    <div>
      <h1>회원가입</h1>
      <input
        type="text"
        name="username"
        placeholder="아이디"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <input
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onClick}>회원가입</button>
    </div>
  );
};

export default SignUp;
