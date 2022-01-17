import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };
  // const [count, setCount] = useState(0);
  // console.log('start', count);

  // const increase = () => {
  //   // count = count + 1; - 직접 바꿀수없다; 옆에 있는 set함수 사용
  //   setCount(count + 1);
  // };
  // const decrease = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <h1>부모 컴포넌트</h1>
      {isSwitchOn ? '스위치 On' : '스위치 Off'}
      <br />
      {/* <button onClick={toggleSwitch}>Switch</button> */}
      <Child lefthand={isSwitchOn} toggleSwitch={toggleSwitch} />

      {/* <h1>count : {count} </h1>
      <button onClick={increase}>눌러서 증가</button>
      <button onClick={decrease}>눌러서 감소</button> */}
    </div>
  );
}

export default Parent;
