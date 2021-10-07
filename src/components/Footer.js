import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div `
    margin: auto;
    padding: 5%;
`

export default function Footer(props) {
    const { copyright } = props;

    return (
        <StyledFooter>
            <p>Copyright©{copyright}</p>
        </StyledFooter>
    )
}