import React from 'react';
import './MainSoojin.scss';
import Nav from '../../../components/Nav/Nav';

function MainSoojin() {
  return (
    <div className="mainBody">
      <Nav />
      <main className="mainpage" role="main">
        <section className="article">
          <div className="profile">
            <div>
              <img alt="My Profile" src="/images/soojin/myProfile.jpg" />
            </div>
            <div>
              <h1>
                <a href="https://www.instagram.com/soojjnng/">sojjnng</a>
              </h1>
              <h2>
                <a href="https://www.instagram.com/explore/locations/949584/lotteworld/">
                  lotteworld
                </a>
              </h2>
            </div>
          </div>
          <div className="photo">
            <img alt="feed image" src="/images/soojin/IMG_9317.jpg" />
          </div>
          <div className="information">
            <ul id="icons">
              <li>
                <img alt="Liked icon" src="/images/soojin/iconLiked.jpg" />
              </li>
              <li>
                <img alt="Comment icon" src="/images/soojin/iconComment.jpg" />
              </li>
              <li>
                <img alt="Share icon" src="/images/soojin/iconShare.jpg" />
              </li>
              <li>
                <img alt="Keep icon" src="/images/soojin/iconKeep.jpg" />
              </li>
            </ul>
            <div className="numberOfLikes">
              <img
                alt="Friend profile picture"
                src="/images/soojin/friendProfile.jpg"
              />
              <p>Liked by h0._.0118 and 83 others</p>
            </div>
            <div className="explanation">
              <a href="https://www.instagram.com/soojjnng/">sojjnng</a>
              <p>모두 행복한 연말 되세요~ ✨⛄️</p>
            </div>
          </div>
          <div className="comments">
            <input type="text" id="comment" placeholder="Add a comment" />
          </div>
        </section>

        <section className="main-right">
          <img alt="suggestions" src="/images/soojin/suggestion.png" />
        </section>
      </main>
    </div>
  );
}

export default MainSoojin;
