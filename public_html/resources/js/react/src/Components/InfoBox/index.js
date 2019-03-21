import React from 'react';
import styled from 'styled-components';
import { Card, TopNavLink } from '../';
const Container = styled.div`
    padding-bottom: 5px
`

const TopSection = styled.div`
    font-size: 24px;
    display: flex;
    height: 40px;
    line-height: 40px;
    margin: 0 2px 4px 2px;
    padding: 5px 20px 0 20px;
    border-bottom: 1px solid grey;
`
const Label = styled.span`
    color: white;
    font-size: 24px;
`
const Center = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 20px;
`

const StyledLink = styled(TopNavLink)`
    margin-left: auto;
`

const mockData = [1, 2, 3, 4, 5, 6, 7]

const InfoBox = () => {
    return (
        <Container>
            <TopSection>
                <Label>Test</Label>
                <StyledLink
                    name="next >"
                    type="fab"
                    iconName="fa-creative-commons-sampling"
                    to="/"
                />
            </TopSection>
            <Center>
                {mockData.map((param, key) => key < 4 ? <Card key={param} /> : null)}
            </Center>
        </Container>
    )
}

export default InfoBox;