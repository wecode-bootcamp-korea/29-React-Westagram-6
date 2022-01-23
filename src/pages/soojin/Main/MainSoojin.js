import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
import Aside from './Aside';
import './MainSoojin.scss';

function MainSoojin() {
  return (
    <div className="mainBody">
      <Nav />
      <main className="mainPage" role="main">
        <Feed />
        <Aside />
      </main>
    </div>
  );
}
export default MainSoojin;
