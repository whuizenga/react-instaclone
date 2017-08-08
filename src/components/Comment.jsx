import React, {Component} from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px;
    strong {
      padding-left: 5px;
      font-weight: bold;
    }
    img {
        height: 30px;
        width: 30px;
        border-radius: 100%;
    }
    p {
      padding-left: 5px;
    }
`


class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <ProfileWrapper>
          <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </ProfileWrapper>
    );
  }
}

export default Comment;