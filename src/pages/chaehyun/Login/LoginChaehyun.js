import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function LoginChaehyun() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const handleInputId = e => {
    setInputId(e.target.value);
    console.log(inputId);
  };
  const handleInputPw = e => {
    setInputPw(e.target.value);
    console.log(inputPw);
  };
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-chaehyun');
  };
  return (
    <body>
      <div className="loginChaehyun">
        <article className="westagramLogin">
          <div className="westagramLogoContainerLogin">
            <div id="westagramLogo">Westagram</div>
          </div>
          <div className="inputWrapper">
            <input
              onChange={handleInputId}
              type="text"
              className="ID"
              placeholder="  전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handleInputPw}
              type="password"
              className="passwords"
              placeholder="  비밀번호"
            />
          </div>
          <div className="buttonWrapper">
            {/* <Link to='/main'> */}
            <button className="loginButton" onClick={goToMain}>
              로그인
            </button>
            {/* </Link> */}
          </div>
          <a href="none" className="forgetPw">
            비밀번호를 잊으셨나요?
          </a>
        </article>
      </div>
    </body>
  );
}

export default LoginChaehyun;
