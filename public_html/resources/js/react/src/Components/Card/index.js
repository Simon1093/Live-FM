import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    margin: 0 0 4px 0;
    padding: 0 2px;
    widht: 20%;
    background: green;
`
export const Card = () => {
    return (
        <StyledCard>
            Привет
        </StyledCard>
    )
}