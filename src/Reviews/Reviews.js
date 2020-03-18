import React from "react";
import styled from "styled-components";
import img1 from "../img/slideshow/3.jpg";
import img2 from "../img/review/women.jpg"
import Stars from "../Header/LatestProducts/Card/Stars/Stars";

const Container = styled.div`
  margin-top: 10px;
  height: 100vh;
  width: 100vw;
  color: #fff;
  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  position: relative;
  padding: 30px;
  &::before{
   content: "";
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: linear-gradient(blueviolet , blue);
   opacity: 0.5;
  }
`;
const Client = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  opacity: 0.9;
  padding: 40px;
`;
const H1 = styled.h1`
  background-color: ${props => props.color ? "dodgerblue" : "#fff"};
  color: ${props => props.color ? "#fff" : "dodgerblue"};
  border-radius: 20px;
  text-align: center;
  padding: 5px 12px;
  font-size: 1.3rem;
  width: 120px;
`;
const P = styled.p`
  font-size: 1.8rem;
  color: ${props => props.color ? "#000" : "#fff"};
  text-transform: uppercase;
  font-weight: lighter;
  margin: 20px 0;
  width: 80%;
  letter-spacing: 1px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
const Photo = styled.div`
  border-radius: 50%;
  background: url(${img2}) no-repeat center/cover ;
  width: 100px;
  height: 100px;
 
`;
const Title = styled.h1`
  position:relative;
  font-size: 2rem;
  color: #fff;
  padding-bottom: 10px;
  border-bottom: 1px solid #fff;
  letter-spacing: 2px;
`;
const Name = styled.div`
  margin-top: 3px;
  color: ${props => props.color ? "#000" : "#fff"};
  font-size: 1.5rem;
`;
const Work = styled.div`
  color: #333;
  font-size: 1.1rem;
`;
const Partners = styled.div`
  position: relative;
  width: 100%;
  background-color: dodgerblue;
  margin-top: 20px;
  opacity: 0.9;
  padding: 40px;
`;
const Reviews = () => {
    return(
        <Container>
            <Title>OUR REVIEWS</Title>
                <Client>
                    <H1 color={true}>Clients</H1>
                    <P color={true}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, repellat?</P>
                    <Flex>
                        <Photo></Photo>
                        <div>
                            <Stars color={true}/>
                            <Name color={true}>Jon Jonson</Name>
                            <Work>SEO Digity</Work>
                        </div>
                    </Flex>
                </Client>
            <Partners>
                <H1 color={false}>Partners</H1>
                <P color={false}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, repellat?</P>
                <Flex>
                    <Photo></Photo>
                    <div>
                        <Stars color={false}/>
                        <Name color={false}>Jon Jonson</Name>
                        <Work>SEO Digity</Work>
                    </div>
                </Flex>
            </Partners>
        </Container>
    )
};
export default Reviews