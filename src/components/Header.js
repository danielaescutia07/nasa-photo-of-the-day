import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div `
    margin: auto;
    padding: 5% 5% 0 5%;
    font-size: 2rem;
`

export default function Header(props) {
    const { date } = props;
    return (
        <StyledHeader>
            <h1>Astronomy Picture of the Day</h1>
        </StyledHeader>
        
    )
}