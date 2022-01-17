import React from 'react';
import Nav from '../../../components/Nav/Nav';

function MainChaehyun() {
  return (
    <body>
      <div className="mainChaehyun">
        <Nav />
        <main>
          <div className="feeds">
            <article>
              <div className="feedTop">
                <div className="feedProfileContainer">
                  <img
                    className="profilePicture"
                    src="/images/chaehyun/main/luffyprofile.jpeg"
                    alt="feedprofile"
                  />
                  <span className="feedProfileId">monkey_d_luffy</span>
                </div>
                <button className="iconButton">
                  <img
                    className="seeMore icon"
                    src="/images/chaehyun/main/seemore.png"
                    alt="seemore"
                  />
                </button>
              </div>
              <img
                className="feedPicture"
                src="/images/chaehyun/main/luffyfeed.jpeg"
                alt="feedpicture"
              />
              <div className="feedIconContainer">
                <div className="feedIconContainerLeft">
                  <button className="iconButton">
                    <img
                      className="like icon"
                      src="/images/chaehyun/main/heart.png"
                      alt="like"
                    />
                  </button>
                  <button className="iconButton">
                    <img
                      className="comment icon"
                      src="/images/chaehyun/main/comment.png"
                      alt="comment"
                    />
                  </button>
                  <button className="iconButton">
                    <img
                      className="share icon"
                      src="/images/chaehyun/main/share.png"
                      alt="share"
                    />
                  </button>
                </div>
                <div className="feedIconContainerRight">
                  <button className="iconButton">
                    <img
                      className="bookmark icon"
                      src="/images/chaehyun/main/bookmark.png"
                      alt="bookmark"
                    />
                  </button>
                </div>
              </div>
              <div className="likesWrapper">
                <img
                  className="profilePicture"
                  alt="likeProfilePicture"
                  src="/images/chaehyun/main/shanks.jpeg"
                />
                <p className="content">
                  <span className="likesPerson">shanks</span>님 외{' '}
                  <span className="howMany">852명</span>이 좋아합니다.
                </p>
              </div>
              <p className="content">
                <span className="feedProfileId">monkey_d_luffy</span> 4억!!!
              </p>
              <p className="minutesAgo">53분전</p>
              <div className="commentWrapper">
                <input
                  className="commentWrite"
                  type="text"
                  placeholder=" 댓글달기..."
                />
                <button className="submit">게시</button>
              </div>
            </article>
          </div>
          <div className="mainRight">
            <div className="wrapper">
              <img
                className="profilePicture"
                alt="rightMyProfilePicture"
                src="/images/chaehyun/main/luffyprofile.jpeg"
              />
              <p className="profileId">monkey_d_luffy</p>
              <button className="transform">전환</button>
            </div>
            <section className="recommendsForMemeber">
              <div className="wrapper">
                <p className="recommends">회원님을 위한 추천</p>
                <a className="seeAll" href="none">
                  모두 보기
                </a>
              </div>
              <div className="followBox">
                <img
                  className="profilePicture"
                  alt="followBoxProfilePicture"
                  src="/images/chaehyun/main/buggy.jpeg"
                />
                <div className="recommendWho">
                  <p className="profileId">buggy</p>
                  <p className="whoFollowsWho">shanks님외 3명이 팔로우합니다</p>
                </div>
                <button className="button">팔로우</button>
              </div>
              <div className="followBox">
                <img
                  className="profilePicture"
                  alt="profilePicture"
                  src="/images/chaehyun/main/crocodile.jpeg"
                />
                <div className="recommendWho">
                  <p className="profileId">crocodile</p>
                  <p className="whoFollowsWho">robin님이 팔로우합니다</p>
                </div>
                <button className="button">팔로우</button>
              </div>
              <div className="followBox">
                <img
                  className="profilePicture"
                  alt="followBoxProfilePicture"
                  src="/images/chaehyun/main/aron.jpeg"
                />
                <div className="recommendWho">
                  <p className="profileId">aron</p>
                  <p className="whoFollowsWho">jinbe님이 팔로우합니다</p>
                </div>
                <button className="button">팔로우</button>
              </div>
              <div className="followBox">
                <img
                  className="profilePicture"
                  alt="followBoxProfilePicture"
                  src="/images/chaehyun/main/law.jpeg"
                />
                <div className="recommendWho">
                  <p className="profileId">trapalga_law</p>
                  <p className="whoFollowsWho">Instagram 신규 가입</p>
                </div>
                <button className="button">팔로우</button>
              </div>
              <div className="followBox">
                <img
                  className="profilePicture"
                  alt="followBoxProfilePicture"
                  src="/images/chaehyun/main/smoker.jpeg"
                />
                <div className="recommendWho">
                  <p className="profileId">smoker</p>
                  <p className="whoFollowsWho">Instagram 신규 가입</p>
                </div>
                <button className="button">팔로우</button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </body>
  );
}

export default MainChaehyun;
