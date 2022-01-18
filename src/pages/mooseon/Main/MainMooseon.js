/* eslint-disable */
import React from 'react';
import './MainMooseon.scss';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';

function MainMooseon() {
  return (
    <div className="mainMooseon">
      <title>WESTAGRAM_Main</title>
      <Nav />
      <main>
        <div id="feeds">
          <article className="article">
            <div className="profile-head">
              <img alt="present-profile" />
              <span>canon_mj</span>
              <img alt="more" />
            </div>
            <div>
              <img src="https://placeimg.com/112/112/any" alt="feedImage" />
            </div>
            <div>
              <img alt="feed-heart" />
              <img alt="bubble" />
              <img alt="share" />
              <img alt="collectionsss" />
            </div>
            <div>
              <img alt="mini-profile" />
              <p>aineworld님 외 10명이 좋아합니다</p>
            </div>
            <div>
              <span>canon_mj 위워크에서 진행한 베이킹 클래스... 더 보기 </span>
              <br />
              <span>neceosecius 거봐 좋았잖아~~~~~🙆‍♀️</span>
              <br />
              <span>42분 전</span>
              <img alt="mini-heart" />
            </div>
            <div>
              <form id="comment">
                <input
                  type="text"
                  id="inputcomment"
                  placeholder="댓글 달기..."
                />
                <button id="submit">게시</button>
              </form>
              <div className="commentAdd">
                <p>
                  <Link to="#" className="name">
                    mooseon
                  </Link>
                  <span>더보기</span>
                </p>
                <ul id="comment-wrapper"></ul>
              </div>
            </div>
          </article>
        </div>
        <section>
          <div id="main-right">
            <div className="story">
              <div>
                <img alt="profile" />
                <div>
                  <span>wecode_bootcamp</span>
                  <span>WeCode | 위코드</span>
                </div>
              </div>
              <div>
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <ul>
                <li>
                  <div>
                    <img alt="profile" />
                  </div>
                  <div>
                    <span>_yum_s</span>
                    <span>16분 전</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img alt="profile" />
                  </div>
                  <div>
                    <span>drink_eat_drink</span>
                    <span>3시간 전</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img alt="profile" />
                  </div>
                  <div>
                    <span>hyukyc</span>
                    <span>20시간 전</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img alt="profile" />
                  </div>
                  <div>
                    <span>jminkeek</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="recommend">
              <div>
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <ul>
                <li>
                  <div>
                    <img alt="profile" />
                  </div>
                  <div>
                    <span>joaaaaaahye</span>
                    <span>_legend_a님 외 2명이 ...</span>
                  </div>
                  <div>
                    <span>팔로우</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img alt="profile" />
                  </div>
                  <div>
                    <span>rampart81</span>
                    <span>ringo.in.seoul님 외 12...</span>
                  </div>
                  <div>
                    <span>팔로우</span>
                  </div>
                </li>
                <li>
                  <div>
                    <img alt="profile" />
                  </div>
                  <div>
                    <span>shawnjjoo</span>
                    <span>jimmylee1220님 외 1...</span>
                  </div>
                  <div>
                    <span>팔로우</span>
                  </div>
                </li>
              </ul>
            </div>
            <p>
              Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ <br />
              채용 정보 ∙ 개인정보처리방침 ∙ 약관 ∙ <br />
              디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
            </p>
            <span>© 2019 INSTAGRAM </span>
          </div>
        </section>
      </main>
      <footer />
    </div>
  );
}

export default MainMooseon;
