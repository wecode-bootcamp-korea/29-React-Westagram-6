import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="wrap">
      <div className="item">Westagram</div>
      <div className="item">
        <input type="text" placeholder="Search" />
      </div>
      <ul className="item" id="icons">
        <li>
          <img alt="Home icon" src="/images/soojin/iconHome.jpg" />
        </li>
        <li>
          <img alt="Dm icon" src="/images/soojin/iconDm.jpg" />
        </li>
        <li>
          <img alt="Upload icon" src="/images/soojin/iconUpload.jpg" />
        </li>
        <li>
          <img alt="Explore icon" src="/images/soojin/iconExplore.jpg" />
        </li>
        <li>
          <img alt="Heart icon" src="/images/soojin/iconHeart.jpg" />
        </li>
        <li>
          <img alt="Profile icon" src="/images/soojin/iconProfile.jpg" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
