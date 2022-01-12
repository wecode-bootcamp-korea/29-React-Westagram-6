import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSoojin from "./pages/soojin/Login/Login";
import MainSoojin from "./pages/soojin/Main/Main";

import LoginChaehyun from "./pages/chaehyun/Login/Login";
import MainChaehyun from "./pages/chaehyun/Main/Main";

import LoginChungkyu from "./pages/chungkyu/Login/Login";
import MainChungkyu from "./pages/chungkyu/Main/Main";

import LoginMooseon from "./pages/mooseon/Login/Login";
import MainMooseon from "./pages/mooseon/Main/Main";

<Route path="/login-chaehyun" element={<LoginChaehyun />} />;
<Route path="/login-soojin" element={<LoginSoojin />} />;
<Route path="/login-chungkyu" element={<LoginChungkyu />} />;
<Route path="/login-mooseon" element={<LoginMooseon />} />;

<Route path="/main-chaehyun" element={<MainChaehyun />} />;
<Route path="/main-soojin" element={<MainSoojin />} />;
<Route path="/main-chungkyu" element={<MainChungkyu />} />;
<Route path="/main-mooseon" element={<MainMooseon />} />;
