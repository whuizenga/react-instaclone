import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa';
import styled from 'styled-components';

const PostWrapper = styled.div`
    background-color: #fff;
    border-radius: 3px;
    width: 95vw;
    max-width: 600px;
    margin: 20px auto;
    border: 1px solid #e6e6e6;
    img {
        max-width: 600px;
        margin: 0 auto
    }
`

const ProfilePicture = styled.div`
    img {
        height: 30px;
        width: 30px;
        border-radius: 100%;
    }
`

const ProfileWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    p {
      padding-left: 5px;
      font-weight: bold;
    }
`
const CommentsWrapper = styled.div `
    div {
      display: block;
    }
`
class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostWrapper>
        <ProfileWrapper>
          <ProfilePicture>
              <img src={post.user.profile_pic} alt={post.user.username} />
          </ProfilePicture>
          <p>{post.user.username}</p>
        </ProfileWrapper>
        <div>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </div>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </PostWrapper>
    )
  }
}

export default Post;