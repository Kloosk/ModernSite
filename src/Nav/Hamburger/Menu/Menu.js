import React from "react";
import styled from "styled-components";
import img from '../../../img/menu/mount.jpg'
const Container = styled.div`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 90vw;
  height: 100vh;
  background-color: #fff;
  color: #000;
  font-size: 1.4rem;
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.6;
  }
`;
const Exit = styled.div`
  z-index: 3;
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;
const Ul = styled.ul`
z-index: 4;
background-color: #fff;
color: #000;
`;
const Li = styled.li`
z-index: 4;
`;
const Menu = () => {
    return(
        <Container>
            <Exit>&times;</Exit>
            <Ul>
                MENU
                <hr/>
                <Li>home</Li>
                <li>shop</li>
                <li>products</li>
                <li>pages</li>
                <li>contact us</li>
            </Ul>
            <ul>
                ACCOUNT
                <hr/>
                <li>Default welcome msg!</li>
                <li>compare products</li>
                <li>sign in</li>
                <li>create an account</li>
            </ul>
            <ul>
                SETTINGS
                <hr/>
                <uL>LANG
                    <li>PL</li>
                    <li>EN</li>
                </uL>
            </ul>
        </Container>
    )
};
export default Menu