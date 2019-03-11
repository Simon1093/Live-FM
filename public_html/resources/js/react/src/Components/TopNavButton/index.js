import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const StyledButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  color: white;
  align-items: center;
  padding: 20px 10px 20px 10px;
  justify-content: center;
  &:hover {
    background-color: #303030;
    color: #ddd;
    opacity: 0.4;
  }
  &:focus {
    border:none;
  }
`
const StyledName = styled.span`
  margin-left: 10px;
`

const TopNavButton = ({
  id,
  iconName,
  name,
  onClick,
  type,
  className
}) => {

  return (
    <StyledButton
      className={className}
      type="button"
      id={id}
      onClick={onClick}
    >
      <Icon
        type={type}
        iconName={iconName}
      />
      {name ? <StyledName>{name}</StyledName> : null}
    </StyledButton >
  );
}

TopNavButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

TopNavButton.defaultProps = {
  className: ''
};
export default TopNavButton;
