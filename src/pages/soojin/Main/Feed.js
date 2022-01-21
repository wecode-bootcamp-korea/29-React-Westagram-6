import React, { useState, useEffect } from 'react';
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
      { userName: 'soojin', comment: urComment, idx: Math.random() },
    ]);
  };

  const UploadComment = ({ name, comment, idx }) => {
    return (
      <div className="commentWrapper">
        <div className="yourId">{name}</div>
        <div className="yourComment">{comment}</div>
        <div className="delete">delete</div>
      </div>
    );
  };

  const hitEnter = e => {
    if (e.key === 'Enter') {
      handleCommentList(e);
      e.target.value = '';
    }
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/soojin/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

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
              name={data.userName}
              comment={data.content}
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
