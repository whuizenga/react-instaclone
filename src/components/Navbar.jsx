import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Navigation = styled.div`
    display: flex;
    width: 90vw;
    justify-content: space-between;
    align-content: center;
    padding: 26px 5vw;
    border-bottom: 1px solid #000000;
  `
const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
  svg {
    fill: currentcolor;
    height: 28;
    width: 28;
  }
`;


const LogoH3 = styled.h3`
  font-size: 1.75rem;
  margin: 0;
  font-family: 'Oleo Script',cursive;
  font-weight: 1000;
`;

const SearchBarDiv = styled.div`
  background: #fafafa;
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  width: 25%;
  padding: 7px;
  border-raidus: 3px;
  color: #999;
  margin: 0;
  text-align: center;
  input {
    border: none;
    font-weight: 300;
    background: transparent;
    text-align: center;
  }
`


class Navbar extends Component{
  render(){

    return (
      <Navigation>
        <LogoH3><FaInstagram /> | Instaclone</LogoH3>
        <SearchBarDiv><FaSearch/><input type="text" placeholder="Search"/></SearchBarDiv>
        <IconsContainer>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </IconsContainer>
      </Navigation>
    );
  }
}

export default Navbar