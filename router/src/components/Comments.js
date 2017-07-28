import React, { Component } from 'react';
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: undefined
    };
  }

  componentWillMount() {
    const { articleId } = this.props;
    const url = `/comments.json`;
    const params = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };
    fetch(url, params)
    .then(response => response.json())
    .then(comments=>comments.filter(comment => comment.articleId == articleId))
    .then(comments => this.setState({ comments }));
  }

  render(){
    const { comments } = this.state;
    if(!comments) {
      return (
        <div>
          Loading comments...
        </div>
      );
    }
    return (
      <div>
        {comments.map(comment => (
          <div>
            <div>{comment.author}</div>
            <div>{comment.text}</div>
          </div> ))}
        </div>
      );
    }
  }

  export default Comments;
