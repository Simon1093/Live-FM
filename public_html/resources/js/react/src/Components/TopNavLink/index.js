import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: flex;
  color: white;
  align-items: center;
  padding: 20px 10px 20px 10px;
  justify-content: center;
  &:hover {
    background-color: #303030;
    color: #ddd;
    text-decoration: none;
    opacity: 0.6;
  }
  &:focus {
    border: none;
    color: white;
  }
`
const StyledIcon = styled(Icon)`
  margin-right: 10px;
`

const TopNavButton = ({
  id,
  iconName,
  name,
  to,
  type,
  className
}) => {

  return (
    <StyledLink
      className={className}
      id={id}
      to={to}
    >
      <StyledIcon
        type={type}
        iconName={iconName}
      />
      {name}
    </StyledLink >
  );
}

TopNavButton.propTypes = {
  id: PropTypes.string,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

TopNavButton.defaultProps = {
  className: ''
};
export default TopNavButton;
