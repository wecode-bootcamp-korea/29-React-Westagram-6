import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './pages/chaehyun/Login/LoginChaehyun.scss';
import './pages/chaehyun/Main/MainChaehyun.scss';
import './pages/chaehyun/commonChaehyun.scss';
import './components/Nav/Nav.scss';

ReactDOM.render(<Router />, document.getElementById('root'));
