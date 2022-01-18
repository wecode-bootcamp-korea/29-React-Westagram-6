/* elsint-disable */
import React, { useState } from 'react';
import './LoginMooseon.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginMooseon() {
  let [idInput, setidInput] = useState('');
  let [pwInput, setpwInput] = useState('');

  //console.log(idInput);
  //console.log(pwInput);

  function onChangeHandler() {
    return idInput.includes('@') && pwInput.length > 5;
    //return idInput.includes('@') && pwInput.length > 5 ? 'onColor' : 'offColor';
  }

  const navigate = useNavigate();
  function onClickHandler() {
    navigate('/Main-Mooseon');
  }

  return (
    <div className="loginMooseon">
      <h1 id="heading">Westagram</h1>
      <input
        onChange={e => {
          setidInput(e.target.value);
        }}
        //onKeyUp={onChangeHandler}
        id="loginId"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={e => {
          setpwInput(e.target.value);
        }}
        //onKeyUp={onChangeHandler}
        id="loginPw"
        type="password"
        placeholder="비밀번호"
      />
      <button
        className={onChangeHandler() ? 'onColor' : 'offColor'}
        onClick={onClickHandler}
        type="button"
        value="submit"
        id="btn"
        // disabled="disabled" // boolean값
      >
        로그인
      </button>
      <Link to="none">비밀번호를 잊으셨나요?</Link>
    </div>
  );
}

export default LoginMooseon;
