import React, {Component} from 'react';
import Post from './Post';

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'blah'
      }, {
        id: 2,
        title: 'blah'
      }, {
        id: 3,
        title: 'blah'
      }, {
        id: 4,
        title: 'blah'
      }, {
        id: 5,
        title: 'blah'
      }
    ]
  }
  render() {
    return (
      <div>
        <h1>Lots of posts</h1>
        {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </div>
    )
  }
}

export default Posts;