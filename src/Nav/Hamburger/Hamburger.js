import React, {useState} from "react";
import styled from "styled-components";
import img from "../../img/menu/mount.jpg";

const Container = styled.div`
  width: 25vw;
  padding: 10px;
  cursor: pointer;
`;
const HamMenu = styled.div`
  width: 35px;
  height: 20px;
  cursor: pointer;
`;
const Line = styled.div`
  position: relative;
  top: 50%;
  width: 33px;
  height: 4px;
  transform: translateY(-50%);
  background-color: ${props => props.scroll ? "#000" : "#fff"};
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
const Containe = styled.div`
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(-91vw)'}; 
  transition: transform 0.5s ease-in;
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
`;
const Exit = styled.div`
  z-index: 3;
  position: absolute;
  top: 2px;
  right: 15px;
  font-size: 4rem;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;
const Ul = styled.ul`
z-index: 3;
color: #000;
list-style: none;
`;
const Li = styled.li`
z-index: 4;
opacity: 0.8;
padding: 13px 13px;
text-transform: uppercase;
font-weight: bold;
font-size: 1.2rem;
background-color: #fff;
border-bottom: 1px solid #fff;
cursor: pointer;
&:hover{
opacity: 1;
border-bottom: 1px solid blueviolet;
}
`;
const Hr = styled.hr`
  background: linear-gradient(blueviolet , blue);
  height: 4px;
`;
const Title = styled.li`
  cursor: auto;
  padding: 20px 15px;
  opacity: 1;
  background-color: #fff;
  font-weight: bold;
`;
const Lang = styled.li`
  cursor: auto;
  padding: 20px 15px;
  opacity: 1;
  background-color: #fff;
  z-index: 5;
  &:hover{
  font-weight: bold;
  }
`;
const LangShow = styled.ul`
  margin-top: 10px;
  display: none;
  transform: translateY();
 ${Lang}:hover & {
     display: block;
  }
`;
const Hamburger = props => {
    const [open,setOpen] = useState(false);
    const openMenu = () => {
      setOpen(!open);
    };
    return(
        <Container>
            <HamMenu onClick={openMenu}>
                <Line scroll={props.scroll}></Line>
            </HamMenu>
            <Containe open={open}>
                <Exit onClick={openMenu}>&times;</Exit>
                <Ul>
                    <Title>MENU</Title>
                    <Hr/>
                    <Li>home</Li>
                    <Li>shop</Li>
                    <Li>products</Li>
                    <Li>pages</Li>
                    <Li>contact us</Li>
                </Ul>
                <Ul>
                    <Title>ACCOUNT</Title>
                    <Hr/>
                    <Li>Default welcome msg!</Li>
                    <Li>compare products</Li>
                    <Li>sign in</Li>
                    <Li>create an account</Li>
                </Ul>
                <Ul>
                    <Title>SETTINGS</Title>
                    <Hr/>
                    <Ul>
                        <Lang>LANGUAGE
                            <LangShow>
                                <Li>PL</Li>
                                <Li>EN</Li>
                            </LangShow>
                        </Lang>

                    </Ul>
                </Ul>
            </Containe>
        </Container>
    )
};
export default Hamburger