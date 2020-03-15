import React from "react";
import styled from "styled-components";

const Container = styled.a`
  display: ${props => props.scroll ? "flex" : "none"};
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: dodgerblue;
  justify-content: center;
  align-items: center;
  color:#fff;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
`;
const Arrow = styled.p`
  font-size: 2rem;
  transform: translateY(20%);
  font-weight: bold;
`;
const ScrollUp = (props) => {
    const scrollTop = () => {
        window.scrollTo(0,0);
    };
  return(
    <Container onClick={scrollTop} scroll={props.scroll}>
        <Arrow>^</Arrow>
    </Container>
  )
};
export default ScrollUp