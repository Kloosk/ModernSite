import React from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger/Hamburger";
import List from "./Hamburger/List/List";
import Icons from "./Icons/Icons";
import Logo from "./Logo/Logo";

const Container = styled.nav`
  width: 100vw;
  height: 50px;
  position:fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3vh 4vw;
  z-index: 2;
`;

const Nav = () => {
    return(
        <Container>
            <Hamburger/>
            <Logo/>
            <Icons/>
        </Container>
    )
};
export default Nav