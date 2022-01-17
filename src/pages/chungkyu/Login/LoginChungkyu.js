import './Login.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function LoginChungkyu() {
  const [active, setActive] = useState();

  console.log('start', active);
  const handleIdinPut = event => {
    setActive(event.target.value);
  };
  const handleIdinPw = event => {
    setActive(event.target.value);
  };
  return (
    <div>
      <link href="style/login.css" rel="stylesheet" type="text/css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      />

      <div className="viewp">
        <div className="centerwrapper">
          <nav className="title">Westagram</nav>
          <div className="input-wrap">
            <input
              id="inputid"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleIdinPut}
            />
            <input
              id="inputpw"
              type="text"
              placeholder="비밀번호"
              onChange={handleIdinPw}
            />
          </div>
          <div className="button-wrap">
            <Link to="/Main-chungkyu">
              {' '}
              <button id="login"> 로그인</button>
            </Link>
          </div>
          <div className="forgetpw">
            <a href>비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginChungkyu;
