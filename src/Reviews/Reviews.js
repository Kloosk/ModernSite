import React from "react";
import styled from "styled-components";
import img1 from "../img/slideshow/3.jpg";
import img2 from "../img/review/women.jpg"
import Stars from "../Header/LatestProducts/Card/Stars/Stars";

const Container = styled.div`
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
  @media (min-width: 1200px) {
     width: 80%;
  }

`;
const H1 = styled.h1`
  background-color: ${props => props.colorr ? "dodgerblue" : "#fff"};
  color: ${props => props.colorr ? "#fff" : "dodgerblue"};
  border-radius: 20px;
  text-align: center;
  padding: 5px 12px;
  font-size: 1.2rem;
  width: 120px;
`;
const P = styled.p`
  font-size: 1.2rem;
  color: ${props => props.colorr ? "#000" : "#fff"};
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
  width: 100%;
  @media (min-width: 1200px) {
     justify-content: flex-start;
  }
`;
const Photo = styled.div`
  border-radius: 50%;
  background: url(${img2}) no-repeat center/cover ;
  width: 100px;
  height: 100px;
 @media (min-width: 1200px) {
     margin-right: 50px;
  }
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
  color: ${props => props.colorr ? "#000" : "#fff"};
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
  @media (min-width: 1200px) {
     width: 80%;
  }
`;
const Grid = styled.div`
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: repeat(2,1fr);
      justify-items: center;
      align-items: center;
      grid-gap: 100px;
  }
`;
const Reviews = () => {
    return(
        <Container>
            <Title>OUR REVIEWS</Title>
            <Grid>
                <Client>
                    <H1 colorr={true}>Clients</H1>
                    <P colorr={true}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, repellat?</P>
                    <Flex>
                        <Photo></Photo>
                        <div>
                            <Stars colorr={true}/>
                            <Name colorr={true}>Jon Jonson</Name>
                            <Work>SEO Digity</Work>
                        </div>
                    </Flex>
                </Client>
            <Partners>
                <H1 colorr={false}>Partners</H1>
                <P colorr={false}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, repellat?</P>
                <Flex>
                    <Photo></Photo>
                    <div>
                        <Stars colorr={false}/>
                        <Name colorr={false}>Jon Jonson</Name>
                        <Work>SEO Digity</Work>
                    </div>
                </Flex>
            </Partners>
            </Grid>
        </Container>
    )
};
export default Reviews
