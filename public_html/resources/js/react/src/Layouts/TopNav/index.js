import React from 'react';
import styled from 'styled-components';
import { TopNavButton, TopNavLink, Input } from '../../Components';

const StyledTopNav = styled.div`
  position: fixed;
  color: white;
  right: 0;
  top: 0;
  width: 100%;
  min-height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: flex-start;
  // justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 5px 12px 0 rgba(0,0,0,.16);
  background-color: rgba(0,0,0,0.8);
`;


const StyledLeftBar = styled.div`
  display: flex;
  align-items: center;
`

const StyledRightBar = styled.div`
  display: flex;
  margin-left:auto;
  align-items: center;
`;


const TopNav = () => (
  <StyledTopNav>
    <StyledLeftBar>

      <TopNavLink
        name="Home"
        type="fas"
        iconName="fa-home"
        to="/"
      />
      <TopNavButton
        name="Menu"
        type="fa"
        iconName="fa-list"
      />
      <TopNavLink
        name="Audio Marks"
        type="far"
        iconName="fa-clock"
        to="/contact"
      />
      <Input
        type="text"
      />
    </StyledLeftBar>
    <StyledRightBar>
      <TopNavLink
        name="Live"
        type="far"
        iconName="fa-comment"
        to="/stuff"
      />
      <TopNavButton
        type="fa"
        iconName="fa-user"
      />
    </StyledRightBar>
  </StyledTopNav>
);

export default TopNav;
