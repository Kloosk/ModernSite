import React from 'react';
import styled ,{keyframes} from "styled-components";
import laptopImg from '../img/popular/laptop.png';

const fadeIn = keyframes`
  0% {
    transform: translate(-50%,-50%) scale(1) ;
  }
  100% {
    transform: translate(-50%,-50%) scale(1.2);
  }
`;

const Container = styled.div`
  width: 100vw;
  margin-bottom: 120px;
  padding:  0 3vw;
`;
const Grid = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;
const Item = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   margin-bottom: 50px;
   &:last-child{
   margin: 0;
   }
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
  width: 20%;
`;
const Outside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f8f8f8;
  display: flex;
  width: 90%;
  height: 30vh;
  padding: 3vh 5vw;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.5s ease;
  &:hover{
    transform: rotateY(90deg);
  }
`;
const Inside = styled.div`
  width: 90%;
  height: 30vh;
  position: relative;
  top: 0;
  left: 0;
  padding: 3vh 5vw;
  cursor: pointer;
  background: linear-gradient(to right, blueviolet,blue);
  z-index: 1;
  &:hover{
    z-index: 2;
  }
`;
const Btn = styled.button`
  background-color: dodgerblue;
  border: none;
  position: absolute;
  top: 40px;
  right: 50px;
  width: 80px;
  height: 60px;
  z-index: 1;
  cursor: pointer;
  &::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    height: 0;
    width: 100%;
    background-color: blueviolet;
    transition: height 0.2s ease-in;
  }
    &::before{
    content: '';
    position: absolute;
    bottom: 50%;
    left: 0;
    height: 0;
    width: 100%;
    background-color: blueviolet;
    transition: height 0.2s ease-in;
    
  }
  &:hover::after{
    height: 50%;
  }
  &:hover::before{
    height: 50%;
  }
  
`;
const Cart = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  z-index: 2;
`;
const Section = styled.section`
  width: 100%;
`;
const Desc = styled.p`
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: #fff;
  width: 100%;
`;
const PIn = styled.p`
  width: 20%;
  font-size: 1rem;
  color: #fff;
  background-color: dodgerblue;
  padding: 3px 7px;
  text-align: center;
`;
const TitleIn = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin: 10px 0 100px 0;
`;
const Search = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
  width: 70px;
  height: 70px;
  cursor: pointer;
  animation: 2s ${fadeIn} 0s infinite;
  &:hover{
    opacity: 1;
  }
`;
const Seek = styled.svg`
   width: 30px;
   height: 30px;
  color: dodgerblue;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;
  position: absolute;
  top: 25%;
  left: 15%;
`;
const Hr = styled.hr`
  height: 4px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: blueviolet;
`;
const H1 = styled.h1`
  font-size: 2rem;
  color: #000;
  min-width: 55%;
  text-align: center;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;
const PopularItems = () => {
    return(
        <Container>
            <Flex>
                    <Hr/><H1>Popular Products</H1><Hr/>
            </Flex>
            <Grid>
                <Item>
                    <Outside>
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
                    </Outside>
                    <Inside>
                        <Section>
                            <PIn>Laptops</PIn>
                            <TitleIn>Lenovo</TitleIn>
                            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae deserunt dignissimos exercitationem </Desc>
                        </Section>
                        <Btn><Cart aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></Cart></Btn>
                        <Search><Seek aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></Seek></Search>
                    </Inside>
                </Item>
                <Item>
                    <Outside>
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
                    </Outside>
                    <Inside>
                        <Section>
                            <PIn>Laptops</PIn>
                            <TitleIn>Lenovo</TitleIn>
                            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae deserunt dignissimos exercitationem </Desc>
                        </Section>
                        <Btn><Cart aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></Cart></Btn>
                        <Search><Seek aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></Seek></Search>
                    </Inside>
                </Item>
                <Item>
                    <Outside>
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
                    </Outside>
                    <Inside>
                        <Section>
                            <PIn>Laptops</PIn>
                            <TitleIn>Lenovo</TitleIn>
                            <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae deserunt dignissimos exercitationem </Desc>
                        </Section>
                        <Btn><Cart aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></Cart></Btn>
                        <Search><Seek aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></Seek></Search>
                    </Inside>
                </Item>
            </Grid>
        </Container>
    )
};
export default PopularItems