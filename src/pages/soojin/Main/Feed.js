import React, { useState, useEffect } from 'react';
import UploadComment from './Data';
import './Feed.scss';

function Feed() {
  const [urComment, setUrComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const commentInput = event => {
    const { value } = event.target;
    setUrComment(value);
  };

  const handleCommentList = () => {
    setCommentList(cur => [
      ...cur,
      {
        email: 'try@gmail.com',
        comment: urComment,
        post_id: '1',
        // idx: Math.random(),
      },
    ]);
    // console.log(commentList);
  };

  const hitEnter = e => {
    if (e.key === 'Enter') {
      fetch('http://10.58.1.97:8002/comment/1', {
        method: 'POST',
        body: JSON.stringify({
          email: 'try@gmail.com',
          comment: urComment,
          post_id: 1,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.message === 'SUCCESS') {
            setCommentList(cur => [
              ...cur,
              {
                email: 'try@gmail.com',
                comment: urComment,
                post_id: '1',
                // idx: Math.random(),
              },
            ]);
          }
        });
      // handleCommentList(e);
      e.target.value = '';
    }
  };

  useEffect(() => {
    fetch('http://10.58.1.97:8002/comment/1')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setCommentList(res.result);
      });
  });

  return (
    <div className="storyAndFeed">
      <section className="stories">
        <img alt="stories" src="/images/soojin/stories.jpg" />
      </section>

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
          <img alt="feed" src="/images/soojin/IMG_9317.jpg" />
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
            <img alt="Friend profile" src="/images/soojin/friendProfile.jpg" />
            <p>Liked by h0._.0118 and 83 others</p>
          </div>
          <div className="explanation">
            <p className="boldId">sojjnng</p>
            <p>모두 행복한 연말 되세요~ ✨⛄️</p>
          </div>
        </div>
        <ul className="commentData">
          {commentList.map(data => (
            <UploadComment
              key={data.id}
              name={data.user_id}
              comment={data.comment}
            />
          ))}
        </ul>
        <div className="comments">
          <input
            autoComplete="off"
            type="text"
            placeholder="Add a comment"
            onInput={commentInput}
            onKeyPress={hitEnter}
          />
        </div>
      </section>
    </div>
  );
}

export default Feed;
