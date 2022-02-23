import styled from "styled-components";

export const Wrapper = styled.div`
   display: grid;
    width: ${props => props.w || "90%"};
    margin: auto;
    grid-template-columns:  repeat(3, 1fr);
    grid-template-rows: ${props => props.gr || "repeat(7, 500px)"};
    grid-gap: 30px;
`