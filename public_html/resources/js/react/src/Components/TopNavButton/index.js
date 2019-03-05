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
  }
  &:focus {
    border:none;
  }
`
const StyledIcon = styled(Icon)`
  margin-right: 10px;
`

const TopNavButton = ({
  id,
  iconName,
  name,
  onClick,
  className
}) => {

  return (
    <StyledButton
      className={className}
      type="button"
      id={id}
      onClick={onClick}
    >
      <StyledIcon
        type="fa"
        iconName={iconName}
      />
      {name}
    </StyledButton >
  );
}

TopNavButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired
}

TopNavButton.defaultProps = {
  className: ''
};
export default TopNavButton;
