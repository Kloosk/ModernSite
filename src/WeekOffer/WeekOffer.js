import React from 'react';
import styled from "styled-components";
import img1 from '../img/mobile/laptop.jpg';

const Container = styled.div`
    height: 180vh;
    width: 100vw;
    background-color: #fff;
    font-size: 2rem;
    position: relative;
    @media (min-width: 1200px) {
      height: 80vh;
  }
`;
const BgH1 = styled.h1`
  position: absolute;
  font-size: 5rem;
  text-align: center;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  opacity: 0.1;
  width: 100%;
`;
const P = styled.p`
  font-size: 2.3rem;
  position: absolute;
  text-align: center;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  width: 90%;
  letter-spacing: 3px;
`;
const Span = styled.span`
  display: block;
  font-size: 2.4rem;
  font-weight: bold;
`;
const Item = styled.div`
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
    @media (min-width: 1200px) {
     width: 50%;
     left: 50%;
  }
`;
const Bg = styled.div`
  width: 75%;
  height: 100%;
  background: url(${img1}) no-repeat center/cover;
  border: 10px solid #e7e7e7;
`;
const Block = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to right,blue,blueviolet);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
   @media (min-width: 1200px) {
     width: 200%;
     bottom: 5%;
     transform: translateX(-50%);
  }
  
`;
const Text = styled.p`
  text-align: center;
  padding: 0 3vw;
  position: absolute;
  top: 55%;
  color: gray;
  font-size: 1.4rem;
  letter-spacing: 1px;
  @media (min-width: 1200px) {
     width: 50%;
     left: 0;
     top: 30%;
     text-align: right;
  }
`;
const Hot = styled.h1`
  font-size: 1.8rem;
  color:#000;
  background: linear-gradient(to right,dodgerblue,#fff);
  border-radius: 14px;
  padding: 5px 10px;
  margin-right: 50px;
`;
const Btn = styled.button`
  font-size: 2rem;
  padding: 7px 14px;
  color: #000;
  cursor: pointer;
  border: 1px solid #000;
  position: relative;
  border-radius: 14px;
  transition: font-weight 0.3s ease-in;
  &::after{
    content: '';
    height: 0;
    width: 100%;
    background: linear-gradient(#fff,dodgerblue);
    position: absolute;
    top: 0;
    left: 0;
    transition: height 0.3s ease-in;
    border-radius: 14px;
    opacity: 0.2;
  }
  &:hover::after{
    height: 100%;
  }
`;
const WeekOffer = () => {
  return(
      <Container>
            <BgH1>BEST OFFER</BgH1>
            <P>CHECK OUT <Span>OUR WEEKLY OFFER</Span></P>
                <Item>
                    <Bg></Bg>
                    <Block>
                        <Hot>HOT!</Hot>
                        <Btn>Buy now!</Btn>
                    </Block>
                </Item>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur earum, facere maiores repellat vel voluptatum?<br/><br/> Alias amet animi atque consequatur cum cupiditate delectus eaque error eum excepturi expedita facilis fuga iste magnam magni minima molestiae nam necessitatibus neque nesciunt odio omnis porro provident quae, quos repellat reprehenderit, sequi similique sint sit sunt suscipit tempore tenetur unde vel vitae voluptates. Quae!</Text>
      </Container>
  )
};
export default WeekOffer
