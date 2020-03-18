import React, {useEffect,useState} from "react";
import styled from "styled-components";
import Hamburger from "./Hamburger/Hamburger";
import List from "./Hamburger/List/List";
import Icons from "./Icons/Icons";
import Logo from "./Logo/Logo";
import ScrollUp from "../ScrollUp/ScrollUp";

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
  z-index: 10;
  color: ${props => props.scroll ? "#000" : "#fff"};
  background-color: ${props => props.scroll && "#fff"};
`;

const Nav = () => {
    useEffect(() => {
      window.addEventListener("scroll",() => {
          console.log(window.pageYOffset);
          if(window.pageYOffset > 0){
              setScroll(true);
          }
         else{
             setScroll(false);
          }
      });
    });
    const [scroll,setScroll] = useState(false);
    return(
        <Container scroll={scroll}>
            <Hamburger scroll={scroll}/>
            <Logo/>
            <Icons/>
            <ScrollUp scroll={scroll}/>
        </Container>
    )
};
export default Nav