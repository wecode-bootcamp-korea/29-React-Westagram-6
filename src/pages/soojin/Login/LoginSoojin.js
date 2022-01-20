import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSoojin.scss';

function LoginSoojin() {
  const [inputValues, setInputValues] = useState({
    id: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // const [inputId, setInputId] = useState('');
  // const [inputPw, setInputPw] = useState('');

  // const handleIdInput = event => {
  //   const { value } = event.target;
  //   setInputId(value);
  // };

  // const handlePwInput = event => {
  //   const { value } = event.target;
  //   setInputPw(value);
  // };

  const [isValidate, setIsValidate] = useState(true);
  const validateButton = () => {
    inputValues.id.includes('@') && inputValues.password.length >= 5
      ? setIsValidate(false)
      : setIsValidate(true);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-soojin');
  };

  // 로그인&회원가입 실습
  // const handleButton = () => {
  //   fetch('http://10.58.3.161:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: inputId,
  //       password: inputPw,
  //       // name: '',
  //       // phone: '',
  //       // account: '',
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log(result));
  // };

  useEffect(() => {
    // console.log(inputId, inputPw);
    validateButton();

    return () => {
      // console.log(inputId, inputPw);
    };
  }, [inputValues]);

  return (
    <div className="westagram">
      <section className="westagramContainer">
        <h1>Westagram</h1>
        <div className="login">
          <div>
            <input
              className="westaId"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              className="westaPw"
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleInput}
            />
          </div>
          <div className="buttonWrapper">
            {/* <Link to="/main-soojin"> */}
            <button
              disabled={isValidate}
              className="westaButton"
              onClick={goToMain}
            >
              로그인
            </button>
            {/* </Link> */}
          </div>
        </div>
        <a
          href="https://www.instagram.com/sem/campaign/emailsignup/?campaign_id=13530338586&extra_1=s|c|547419126431|e|instagram%20%27|&placement=&creative=547419126431&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338586%26adgroupid%3D126262418054%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D1009871%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiA2sqOBhCGARIsAPuPK0jcdlJphJovnl18oPxBsiA-k2HHGhrA-DCugKCsTl_QYfTL4GUxcakaAi7REALw_wcB"
          target="_blank"
          rel="noreferrer"
        >
          비밀번호를 잊으셨나요?
        </a>
      </section>
    </div>
  );
}

export default LoginSoojin;
