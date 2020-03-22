import React from 'react';
import styled from "styled-components";
import img1 from '../img/card/card.jpg';
import img2 from '../img/mobile/laptop.jpg';

const Container = styled.div`
  width: 100vw;
  height: 130vh;
  @media (min-width: 1200px) {
      height: 100vh;
      padding: 0 50px;
  }

`;
const Img = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  @media (min-width: 1200px) {
      height: 100%;
  }
`;
const ImgTwo = styled.div`
  position: absolute;
  top: 0;
  left: 55%;
  height: 50vh;
  width: 80%;
  transform: translateX(-50%);
  background: url(${img1})  no-repeat center/cover;
  z-index: 1;
  transition: all 0.5s ease-in;
   ${Img}:hover & {
    transform: translate(-56%,20px);
    z-index: 2; 
  }
  @media (min-width: 1200px) {
      height: 100%;
  }
`;
const ImgOne = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  width: 80%;
  height: 50vh;
  background: url(${img2}) no-repeat center/cover;
  transform: translateX(-50%);
  transition: all 0.5s ease-in;
  z-index: 2;
  ${Img}:hover &{
     transform: translate(-44%,-20px);
      z-index: 1;
  }
   @media (min-width: 1200px) {
      height: 100%;
  }
`;
const Text = styled.div`
  width: 95%;
  padding: 0 5vw 2vh 5vw;
  border-right: 10px solid gray;
  border-bottom: 10px solid gray;
  @media (min-width: 1200px) {
     align-self: flex-end;
  }
`;
const H1 = styled.h1`
 font-size: 2rem;
 color: #000;
 letter-spacing: 2px;
 font-weight: lighter;
`;
const Span = styled.span`
  margin-top: 5px;
  display: block;
  font-weight: bold;
  letter-spacing: 2px;
`;
const P = styled.p`
  margin-top: 10px;
  font-size: 1.1rem;
  padding: 20px 20px;
`;
const A = styled.a`
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 1px;
  padding: 0 20px;
  color: dodgerblue;
`;
const Hr = styled.hr`
  height: 4px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: blueviolet;
`;
const Hone = styled.h1`
  font-size: 1.5rem;
  color: #000;
  min-width: 50%;
  text-align: center;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media (min-width: 1200px) {
      margin-bottom: 150px;
  }
`;
const Grid = styled.div`
    height: 100%;
    @media (min-width: 1200px) {
      display: flex;
      flex-direction: row-reverse;
      height: 50%;
      align-items: center;
  }
`;
const ReadMore = () => {
    return(
        <Container>
            <Flex>
                <Hr/><Hone>Read More</Hone><Hr/>
            </Flex>
            <Grid>
                <Img>
                    <ImgOne></ImgOne>
                    <ImgTwo></ImgTwo>
                </Img>
                <Text>
                    <H1>BEST FURNITURE<Span>IN THE WORLD</Span></H1>
                    <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aut dolorem eum eveniet expedita fugit porro quas quia, ut.</P>
                    <A href="#">LEARN MORE</A>
                </Text>
            </Grid>
        </Container>
    )
};
export default ReadMore