import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/variables.scss';
// import './components/Nav/Nav.scss';  공용으로 사용하기로 정했을때 제대로 작동하는지 확인차 적었던것

ReactDOM.render(<Router />, document.getElementById('root'));
