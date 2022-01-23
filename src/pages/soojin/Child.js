import React from 'react';

function Child(props) {
  console.log(props.lefthand);
  return (
    <div>
      <h1>자식 컴포넌트</h1>
      <button onClick={props.toggleSwitch}>Switch</button>
    </div>
  );
}

export default Child;
