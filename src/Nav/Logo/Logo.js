import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;
const H1 = styled.h1`
  color: inherit;
  font-size: 2rem;
  cursor: pointer;
`;
const Logo = () => {
    return(
        <Container>
            <H1>ModernSite</H1>
        </Container>
    )
};
export default Logo