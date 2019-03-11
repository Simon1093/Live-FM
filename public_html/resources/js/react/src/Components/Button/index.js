import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: auto;
    min-width: 154px;
    border-width:  1px;
    border-radius: 3px;
    color:  grey;
    font-size: 13px;
    text-transform: uppercase;
    background-color:  white;
    &: hover {
        opacity: 0.4;
        cursor: pointer;
    }
    &: focus {
    outline: none;
    }
`

const Button = ({
    id,
    color,
    border,
    children,
    disabled,
    onClick,
    className
}) => {

    return (
        <StyledButton
            className={className}
            type="button"
            id={id}
            // color={color}
            // border={border}
            // disabled={disabled}
            onClick={onClick}
        >
            {children}
        </StyledButton >
    );
}

Button.propTypes = {
    id: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.bool,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
}

Button.defaultProps = {
    className: '',
    color: 'white'
};
export default Button;
