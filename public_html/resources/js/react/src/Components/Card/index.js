import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    margin: 0 10px 4px 10px;
    padding: 0 2px;
    width: 20%;
`
const Card = () => {
    return (
        <StyledCard>
            <img src={'data:image/jpeg;base64,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'}
                style={{ width: '80%' }} />
        </StyledCard>
    )
}

export default Card;