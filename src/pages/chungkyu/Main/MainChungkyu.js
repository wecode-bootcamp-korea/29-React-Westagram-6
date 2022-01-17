import React from 'react';
import './MainChungkyu.scss';
import Nav from '../../../components/Nav/Nav';

function MainChungkyu() {
  return (
    <div className="mainChungkyu">
      <link href="./style/main.css" rel="stylesheet" type="text/css" />
      <div>
        <main>
          <Nav />
          <div className="feedwrapper">
            <div className="feeds">
              <article>
                <img
                  src="images/chungkyu/다운로드.jpeg"
                  width="100%"
                  height="100%"
                />
              </article>
              <span className="contact">
                <i className="far fa-heart fa-2x" />
                <i className="far fa-comment fa-2x" />
                <i className="far fa-paper-plane fa-2x" />
              </span>
              <ul className="list">
                <li>
                  <span className="name">chungkyukim</span>
                  <span>런각인데.....</span>
                </li>
              </ul>
              <div className="comment">
                <input
                  calss="commentinput"
                  type="text"
                  placeholder="댓글을 입력하세요.."
                />
                <button className="button">게시</button>
              </div>
            </div>
            <div className="main-rights" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainChungkyu;
