import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: #fff;
  z-index: 2;
  padding: 0 5vw 5vh 5vw;
  font-size: 1.2rem;
  font-weight: normal;
    @media (min-width: 1200px) {
      max-width: 50%;
      max-height: 70%;  
   }
`;
const TitleSmall = styled.p`
  font-size: 1.3rem;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  @media (min-width: 1200px) {
  font-size: 1.7rem;
  }
`;
const TitleBig = styled.p`
  margin: 10px 0;
  font-weight: bold;
  font-size: 2rem;
  @media (min-width: 1200px) {
  font-size: 2.2rem;
  }
`;
const P = styled.p`
  font-size: 1rem;
  @media (min-width: 1200px) {
  font-size: 1.2rem;
  }
`;
const Flex=  styled.div`
  margin: 35px 0;
  display: flex;
  align-items: center;
`;
const Btn = styled.button`
  background-color: #fff;
  color: dodgerblue;
  padding: 8px 18px;
  border-radius: 20px;
  font-size: 1.2rem;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
  @media (min-width: 1200px) {
  font-size: 1.4rem;
  }
`;
const Price = styled.p`
  font-size: 1.5rem;
  margin-left: 20px;
  @media (min-width: 1200px) {
  font-size: 1.7rem;
  }
`;
const Txt = () => {
    return(
        <Container>
            <TitleSmall>Network device</TitleSmall>
            <Title>& Feature</Title>
            <TitleBig>Car audio</TitleBig>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur commodi dolores eaque, excepturi fugiat ipsam iure iusto, laboriosam, odio pariatur repudiandae sit velit? Ab alias aliquid at culpa, eius possimus!</P>
            <Flex>
                <Btn>+ Add to cart</Btn>
                <Price>1,200$</Price>
            </Flex>
        </Container>
    )
};
export default Txt