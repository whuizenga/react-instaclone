import React, {Component} from React;

class Posts extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'blah'
      }, {
        id: 1,
        title: 'blah'
      }, {
        id: 1,
        title: 'blah'
      }, {
        id: 1,
        title: 'blah'
      }, {
        id: 1,
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