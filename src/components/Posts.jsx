import React, {Component} from 'react';
import Faker from 'faker';
import Post from './Post';

const fakePost = () => ({
  id: Faker.random.uuid(),
  user: {
    username: Faker.internet.userName(),
    profile_pic: Faker.image.image()
  },
  image: {
    url: Faker.image.image()
  },
  caption: Faker.lorem.sentence(),
  likes: [
    {
      username: Faker.internet.userName(),
      profile_pic: Faker.image.image()
    }
  ],
  comments: [
    {
      id: Faker.random.uuid(),
      text: Faker.lorem.sentences(),
      from: {
        username: Faker.internet.userName(),
        profile_pic: Faker.image.image()
      }
    }
  ]
});


class Posts extends Component {
  state = {
    posts: []
  }
  componentWillMount(){
    const posts = [];
    for(let i = 0; i < 6; i++){
      posts.push(fakePost());
    }
    this.setState({posts});
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