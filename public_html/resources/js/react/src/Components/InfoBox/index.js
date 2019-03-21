import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import TopNavLink from '../TopNavLink';
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

const mockData = [1, 2, 3, 4, 5]

export const InfoBox = () => {
    // render() {
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
                {/* <StyledButton>Test</StyledButton> */}
            </TopSection>
            <Center>
                {mockData.map(param => <Card key={param} />)}
            </Center>
        </Container>
    )
}
// }

// export default InfoBox;