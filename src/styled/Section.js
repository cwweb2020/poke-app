import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: ${props => props.p || "0"};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`