import React from 'react';
import comment from '../../images/comment-icon.png';
import retweet from '../../images/retweet-icon.png';
import like from '../../images/like-icon.png';
import repost from '../../images/repost-icon.png';
import verified from '../../images/verified.png';
import arrow from '../../images/down-arrow.png';
import './style.css';

function Post(props) {
  return (
    <div className="post-wrapper">
      <div className="header">
        <img className="author-pic" alt="author-pic" src={props.author.photo} />
        <div className="header-content">
          <div className="header-top">
            <div className="author-info">
              <span className="author-name">{props.author.name}</span>
              <img alt="verifed" className="icon-ver" src={verified} />
              <div className="additional-info">
                <span className="author-nickname">{props.author.nickname}</span>
                <span>&#183;</span>
                <span className="current-date">{props.date}</span>
              </div>
            </div>
            <img className="arrow" alt="arrow" src={arrow} />
          </div>

          <p className="content">{props.content}</p>
        </div>
      </div>
      <div className="main">
        <img className="main-pic" alt="ray-pic" src={props.image} />
        <div className="footer">
          <div className="icon-container">
            <img className="icon" alt="comment" src={comment} />
            <span>{props.comments}</span>
          </div>
          <div className="icon-container">
            <img className="icon" alt="retweet" src={retweet} />
            <span>{props.retweets}</span>
          </div>
          <div className="icon-container">
            <img className="icon" alt="like" src={like} />
            <span>{props.likes}</span>
          </div>
          <div className="icon-container">
            <img className="icon" alt="repost" src={repost} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
