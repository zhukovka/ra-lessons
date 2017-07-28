import React, { Component } from 'react';
import withFetcher from './withFetcher';
const CommentsComponent = ({comments, articleId})=> {
  if(!comments) {
    return (
      <div>
        Loading comments...
      </div>
    );
  }
  return (
    <div>
      {comments.filter(comment => comment.articleId == articleId).map(comment => (
        <div key={comment.id}>
          <div>{comment.author}</div>
          <div>{comment.text}</div>
        </div> ))}
      </div>
  );
}

const Comments = withFetcher({
  url: ({articleId}) => `/comments.json`,
  collName: 'comments'
})(CommentsComponent);

export default Comments;
