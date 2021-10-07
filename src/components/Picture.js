import React from "react"
import styled from "styled-components";

const StyledPicture = styled.div `
    display: flex;
    flex-direction: column;
    margin: 2%;
    padding: 5%;
`
const StyledImage = styled.img `
    display: flex;
    margin: auto;
    width: 70%;
    border: white 7px double;
    border-radius: 50%;
`
const StyledTitle = styled.h3 `
    font-size: 2rem;
`
const StyledP = styled.p `
    font-size: 1.5rem;
`
const StyledP2 = styled.h3 `
    font-size: 1.2rem;
    padding: 0 5%;
`

export default function Picture(props) {
    const { image, title, date, explanation } = props
    return (
        <StyledPicture>
            <StyledImage src={image} alt='big'/>
            <StyledTitle>{title}</StyledTitle>
            <StyledP>Date:{date}</StyledP>
            <StyledP2>{explanation}</StyledP2>
        </StyledPicture>
    )
}