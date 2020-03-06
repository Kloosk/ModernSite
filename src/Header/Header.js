import React from "react";
import styled from "styled-components";
import LatestProducts from "./LatestProducts/LatestProducts";
const Container = styled.div`
  width: 100vw;
`;

const Header = () => {
    return(
        <Container>
            <LatestProducts/>
        </Container>
    )
};
export default Header