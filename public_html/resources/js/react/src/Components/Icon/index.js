import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconElement = styled.i`
  font-size: ${props => props.size};
  color: ${props => props.color};
`

const Icon = ({
  type,
  iconName,
  color,
  size,
  className,
  onClick
}) => (
    <IconElement
      className={`${className} ${type} ${iconName}`} color={color} size={size}
      onClick={onClick}
    />
  );

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

Icon.defaultProps = {
  className: '',
  color: 'grey',
  size: '13px'
};

export default Icon;
