import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon'

const Span = styled.span`
  color: #E95778;
  display: flex;
  margin-top: 5px;
  font-size: 12px;
  position: absolute;
`

export const StyledInput = styled.input`
  height: 40px;
  background-color: transparent;
  width: 100%;
  padding: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.invalid
    ? '#E95778'
    : '#E8E8E8'
  };
  &:focus{
    outline:  none;
    border-bottom-color: ${props => props.invalid
    ? '#E95778'
    : '#6e5aad'
  };
    &::placeholder {
      opacity: 0;
    }
  }
`

const Container = styled.div`
  display: flex;
  align-items: center;
`


const Input = ({
  disabled,
  onChange,
  onBlur,
  placeholder,
  required,
  invalid,
  value,
  name,
  errorMessage,
  type,
  className
}) => {
  const Errors = () => {
    if (invalid) {
      return <Span>{errorMessage}</Span>
    }

    return null;
  }

  return (
    <div className={className}>
      <Container>

        <Icon
          type="fas"
          iconName="fa-search"
        />
        <StyledInput
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          required={required}
          disabled={disabled}
          invalid={invalid}
          type={type}
          placeholder={placeholder}
          value={value}
        />
      </Container>
      {Errors()}
    </div>)
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.boolean,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.boolean,
  invalid: PropTypes.boolean,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string
}
export default Input;

Input.defaultProps = {
  invalid: false,
  required: false,
  className: ''
}
