import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  width: 100vw;
  color: #000;
  padding: 5vh 10vw 0 10vw;
  background-color: #fff;
  font-size: 1.2rem;
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Li = styled.li`
  cursor: pointer;
  padding: 20px;
  border-bottom: 1px solid #fff;
  &:hover{
   border-bottom: 1px solid #000;
  }
`;
const Copy = styled.div`
  margin: 40px 0;
  font-size: 1rem;
`;
const Footer = () => {
    return(
        <Container>
            <Ul>
                <Li>HOME</Li>
                <Li>PAGES</Li>
                <Li>ELEMENTS</Li>
                <Li>BLOG</Li>
                <Li>SHOP</Li>
            </Ul>
            <Copy>
                &copy; ModernSite
            </Copy>
        </Container>
    )
};
export default Footer