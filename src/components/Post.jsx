import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component{
  render(){
    return(
      <div>
        <img src={this.props.post.image.url} />
        <h1>{this.props.post.title}</h1>
        <Comment />
      </div>
    )
  }
}

export default Post;