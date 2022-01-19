/* eslint-disable */
import React, { useState } from 'react';
import './MainMooseon.scss';
import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';
import Sections from './Sections';

function MainMooseon() {
  //console.log('aaaa');
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

  return (
    <div className="mainMooseon">
      <title>WESTAGRAM_Main</title>
      <Nav />
      <main>
        <div id="feeds">
          <article className="article">
            <div className="profile-head">
              <img src="https://placeimg.com/22/22/any" alt="present-profile" />
              <span>canon_mj</span>
              <img src="https://placeimg.com/22/22/any" alt="more" />
            </div>
            <div>
              <img
                id="mainImg"
                src="https://placeimg.com/112/112/any"
                alt="feedImage"
              />
            </div>
            <div>
              <img src="https://placeimg.com/21/21/any" alt="feed-heart" />
              <img src="https://placeimg.com/22/23/any" alt="bubble" />
              <img src="https://placeimg.com/22/21/any" alt="share" />
              <img src="https://placeimg.com/21/23/any" alt="collectionsss" />
            </div>
            <div>
              <img src="https://placeimg.com/24/22/any" alt="mini-profile" />
              <p>aineworld님 외 10명이 좋아합니다</p>
            </div>
            <div>
              <span>canon_mj 위워크에서 진행한 베이킹 클래스... 더 보기 </span>
              <br />
              <div>{commentList}</div>

              <br />
              <span>42분 전</span>
              <img src="https://placeimg.com/22/22/any" alt="mini-heart" />
            </div>

            <div className="mainBottom">
              <form id="comment">
                <input
                  onChange={e => {
                    setComment(e.target.value);
                    console.log(comment);
                  }}
                  type="text"
                  id="inputcomment"
                  placeholder="댓글 달기..."
                />
                <button onClick={newComment()} id="submit">
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
                <ul id="comment-wrapper"></ul>
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
