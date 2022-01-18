/* elsint-disable */
import React, { useState } from 'react';
import './LoginMooseon.scss';
import { Link } from 'react-router-dom';

function LoginMooseon() {
  let [idInput, setidInput] = useState('');
  let [pwInput, setpwInput] = useState('');

  console.log(idInput);
  console.log(pwInput);

  return (
    <div className="loginMooseon">
      <h1 id="heading">Westagram</h1>
      {idInput}
      <input
        onChange={e => {
          setidInput(e.target.value);
        }}
        id="loginId"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={e => {
          setpwInput(e.target.value);
        }}
        id="loginPw"
        type="password"
        placeholder="비밀번호"
      />
      <button
        //onClick={onClickHandler}
        type="button"
        value="submit"
        id="btn"
        disabled="disabled"
      />
      <Link to="none">비밀번호를 잊으셨나요?</Link>
    </div>
  );
}

export default LoginMooseon;
