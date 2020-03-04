import React from "react";
import styled from "styled-components";
import List from "./List/List";
import Menu from "./Menu/Menu";

const Container = styled.div`
  width: 25vw;
  padding: 10px;
  cursor: pointer;
`;
const Line = styled.div`
  position: relative;
  top: 50%;
  width: 33px;
  height: 4px;
  transform: translateY(-50%);
  background-color: #fff;
  border-radius: 3px;
  &::after{
  content: '';
  position: absolute;
  bottom: 9px;
  width: inherit;
  height: inherit;
  background-color: inherit;
  border-radius: inherit;
  }
  &::before{
  content: '';
  position: absolute;
  top: 9px;
  width: inherit;
  height: inherit;
  background-color: inherit;
  border-radius: inherit;
  }
`;
const Hamburger = () => {
    return(
        <Container>
            <Line></Line>
            <List/>
            <Menu/>
        </Container>
    )
};
export default Hamburger