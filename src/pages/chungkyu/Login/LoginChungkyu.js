import './Login.scss';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function LoginChungkyu() {
  const [activeid, setActiveid] = useState();

  const handleIdinPut = event => {
    setActiveid(event.target.value);
  };

  const [activepw, setActivepw] = useState();

  const handleIdinPw = event => {
    setActivepw(event.target.value);
  };

  const [button, setButton] = useState(true);

  const changeColor = () => {
    if (activeid.length > 5 && activepw.length > 5) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleFetch = () => {
    fetch('http://10.58.2.159/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: activeid,
        password: activepw,
        account: activeid,
        name: activeid,
        phone: '010-7942-0886',
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과:', result));
  };

  // useEffect(() => {
  //   if (activeid.length > 5 && activepw.length > 5) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // }, [activeid, activepw]);

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
              onKeyup={changeColor}
            />
            <input
              id="inputpw"
              type="text"
              placeholder="비밀번호"
              onChange={handleIdinPw}
              onKeyUp={changeColor}
            />
          </div>
          <div className="button-wrap">
            <Link to="/Main-chungkyu">
              <button disabled={button ? true : false} onClick={handleFetch}>
                로그인
              </button>
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
