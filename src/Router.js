import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginSoojin from './pages/soojin/Login/LoginSoojin';
import MainSoojin from './pages/soojin/Main/MainSoojin';

import LoginChaehyun from './pages/chaehyun/Login/LoginChaehyun';
import MainChaehyun from './pages/chaehyun/Main/MainChaehyun';

import LoginChungkyu from './pages/chungkyu/Login/LoginChungkyu';
import MainChungkyu from './pages/chungkyu/Main/MainChungkyu';

import LoginMooseon from './pages/mooseon/Login/LoginMooseon';
import MainMooseon from './pages/mooseon/Main/MainMooseon';

// import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Routes>
        <Route path="/login-chaehyun" element={<LoginChaehyun />} />
        <Route path="/login-soojin" element={<LoginSoojin />} />
        <Route path="/login-chungkyu" element={<LoginChungkyu />} />
        <Route path="/login-mooseon" element={<LoginMooseon />} />
        <Route path="/main-chaehyun" element={<MainChaehyun />} />
        <Route path="/main-soojin" element={<MainSoojin />} />
        <Route path="/main-chungkyu" element={<MainChungkyu />} />
        <Route path="/main-mooseon" element={<MainMooseon />} />
        {/* <Route path="/nav" element={<Nav />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
