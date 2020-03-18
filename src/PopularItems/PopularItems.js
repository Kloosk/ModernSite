import React from 'react';
import styled from "styled-components";
import laptopImg from '../img/popular/laptop.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;
const Item = styled.div`
  background-color: #f8f8f8;
  display: flex;
  width: 90%;
  height: 30vh;
  padding: 4vh 5vw;
`;
const Category = styled.div`
  display: flex;
`;
const Title = styled.h1`
  color: #000;
  font-size: 1.5rem;
  margin: 5px 0 100px 0;
`;
const P = styled.p`
  font-size: 1rem;
  color: #fff;
  background-color: dodgerblue;
  padding: 3px 7px;
  margin: 0 5px;
  &:nth-child(2){
  background-color: blueviolet;
  }
`;
const PriceS = styled.del`
  color: darkgray;
  font-size: 0.9rem;
`;
const PriceB = styled.p`
  color: dodgerblue;
  font-size: 1.3rem;
  margin-top: 10px;
`;
const Right = styled.div`
  background: url(${laptopImg}) no-repeat center/cover;
  width: 80%;
`;
const Left = styled.div`
  width: 50%;
`;
const PopularItems = () => {
    return(
        <Container>
            <Item>
                <Left>
                    <Category>
                        <P>Laptops</P>
                        <P>Sale</P>
                    </Category>
                    <Title>Lenovo</Title>
                    <PriceS>$24.00</PriceS>
                    <PriceB>$19.00</PriceB>
                </Left>
                <Right></Right>
            </Item>
        </Container>
    )
};
export default PopularItems