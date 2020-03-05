import React from "react";
import styled from "styled-components";
import img1 from '../../../img/card/card.jpg'
import Stars from "./Stars/Stars";
const Container = styled.div`
   width: 100vw;
   height: 60vh;
   margin-top: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const Out = styled.div`
   width: 80vw;
   height: 60vh;
   transform-style: preserve-3d;
   transition: transform 1s ease-in-out;
  ${Container}:hover &{
      transform: rotateY(180deg);
   }
`;
const Front = styled.div`
 width: 80vw;
    height: 60vh;
  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  position:absolute;
  box-shadow: 6px 7px 5px 0 rgba(51,51,51,1);
  &::after{
    content: 'SALE';
    position: absolute;
    top: 20%;
    right: -3px;
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background-color:dodgerblue;
    border-radius: 5px;
  }
`;
const Txt = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 21%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &::before{
    content: 'Electronics';
    position: absolute;
    top: -17px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 1rem;
    color: #fff;
    background-color: dodgerblue;
  }
`;
const Back = styled.div`
 position:absolute;
  transform: rotateY(180deg);
  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  width: 80vw;
  height: 60vh;
  
`;
const H1 = styled.h1`
  font-size: 1.8rem;
  padding: 5px;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PriceOld = styled.p`
  color: gray;
  font-size: 0.8rem;
  margin-right: 8px;
`;
const PriceNew = styled.p`
  color: dodgerblue;
  font-size: 1.4rem;
  font-weight: bold;
`;
const Btn = styled.button`
  background-color: dodgerblue;
  color: #fff;
  font-size: 1.3rem;
  border-radius: 20px;
  padding: 10px 30px;
  border: none;
  outline: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
 
`;
const Cart = styled.svg`
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin-right: 10px;
`;

const Card = () => {
    return(
        <Container>
            <Out>
                <Front>
                    <Txt>
                        <H1>Car Audio</H1>
                        <Stars/>
                        <Flex>
                            <PriceOld>$26.00</PriceOld>
                            <PriceNew>$24.00</PriceNew>
                        </Flex>
                    </Txt>
                </Front>
                <Back>
                    <Btn>
                        <Cart aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></Cart>
                        BUY
                    </Btn>
                </Back>
            </Out>
        </Container>
    )
};
export default Card