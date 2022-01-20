/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 리액트 관련 패키지가 먼저 import된다
import Nav from '../../../components/Nav/Nav';
import Sections from './Sections';
import './MainMooseon.scss'; // css파일은 가장 마지막에 Import

function MainMooseon() {
  let [comment, setComment] = useState('');
  let [commentList, setCommentList] = useState(['comment add here']);

  function newComment() {
    return e => {
      e.preventDefault();
      console.log('comment');
      console.log(comment);
      let commentbox = commentList;
      setCommentList(commentbox.concat(comment));
      console.log('commentList');
      console.log(commentList);
    };
  }
  //heading    main-right
  return (
    <div className="mainMooseon">
      <title>WESTAGRAM_Main</title>
      <Nav />
      <main>
        <div className="feeds">
          <article className="article">
            <div className="profile-head">
              <img alt="present-profile" src="https://placeimg.com/22/22/any" />
              <span>canon_mj</span>
              <img alt="more" src="https://placeimg.com/22/22/any" />
            </div>
            <div>
              <img
                className="mainImg"
                alt="feedImage"
                src="https://placeimg.com/112/112/any"
              />
            </div>
            <div>
              <img alt="feed-heart" src="https://placeimg.com/21/21/any" />
              <img alt="bubble" src="https://placeimg.com/22/23/any" />
              <img alt="share" src="https://placeimg.com/22/21/any" />
              <img alt="collectionsss" src="https://placeimg.com/21/23/any" />
            </div>
            <div>
              <img alt="mini-profile" src="https://placeimg.com/24/22/any" />
              <p>aineworld님 외 10명이 좋아합니다</p>
            </div>
            <div>
              <span>canon_mj 위워크에서 진행한 베이킹 클래스... 더 보기 </span>
              <br />
              <div>{commentList}</div>

              <br />
              <span>42분 전</span>
              <img alt="mini-heart" src="https://placeimg.com/22/22/any" />
            </div>

            <div className="mainBottom">
              <form className="comment">
                <input
                  onChange={e => {
                    setComment(e.target.value);
                    console.log(comment);
                  }}
                  type="text"
                  className="inputcomment"
                  placeholder="댓글 달기..."
                />
                <button onClick={newComment()} className="submit">
                  게시
                </button>
              </form>
              <div className="commentAdd">
                <p>
                  <div className="name">댓글추가</div>
                  {/* {commentList.map(comment, i => {
                    return <span key={i}>{comment}</span>;
                  })} */}
                  {/* // {this.state.contents.map((content, index) => { */}
                  {/* //      return (
//        <Content key={index} userName={index} content={content} /> */}

                  <span>더보기</span>
                </p>
                <ul className="comment-wrapper"></ul>
              </div>
            </div>
          </article>
        </div>
        <Sections />
      </main>
      <footer />
    </div>
  );
}

export default MainMooseon;
