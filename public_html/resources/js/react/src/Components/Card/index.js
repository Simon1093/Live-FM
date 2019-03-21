import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    margin: 0 10px 4px 10px;
    padding: 0 2px;
    width: 20%;
    background: green;
`
export const Card = () => {
    return (
        <StyledCard>
            Привет
        </StyledCard>
    )
}