import React from 'react';
import styled from 'styled-components';
import { TopNavButton, TopNavLink } from '../../Components';

const StyledTopNav = styled.div`
  position: fixed;
  color: white;
  right: 0;
  top: 0;
  width: 100%;
  min-height: 60px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 5px 12px 0 rgba(0,0,0,.16);
  background-color: rgba(0,0,0,0.8);
`;

const StyledToolbarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;


const StyledRightBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const TopNav = () => (
  <StyledTopNav>
    <div>TopNav</div>
    <StyledRightBar>
      <StyledToolbarContainer>
        <TopNavButton
          name="Menu"
          iconName="fa-home"
        />
        <TopNavLink
          name="Link"
          iconName="fa-home"
          to="/stuff"
        />
      </StyledToolbarContainer>
    </StyledRightBar>
  </StyledTopNav>
);

export default TopNav;
