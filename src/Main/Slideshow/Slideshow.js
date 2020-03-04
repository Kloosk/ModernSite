import React,{useState} from "react";
import styled from "styled-components";
import Txt from "./Txt/Txt";
import Img from "./Img/Img";
import img1 from "../../img/slideshow/1.jpg";
import img2 from "../../img/slideshow/2.jpg";
import img3 from "../../img/slideshow/3.jpg";
const img = [img1,img2,img3];
const Container = styled.div`
    display: flex;
    transform: translateX(${props =>(props.num)}vw);
    transition: transform 1s ease-out;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left:0;
  background-image: url(${props => img[props.num]});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(blueviolet , blue);
    opacity: 0.8;
  }
`;
const ArrowLeft = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 50px;
  left: 45%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 2;
  font-size: 2.5rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`;
const ArrowRight = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 50px;
  left: 55%;
  transform: translateX(-50%);
  color: #fff;
  z-index: 2;
  font-size: 2.5rem;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
`;

const Slideshow = () => {
    const [count,setCount] = useState(0);
    const SlideRight = () => {
        if(count === 100){
            setCount(-100);
        }
        else{
            setCount( count+100);
        }
    };
    const SlideLeft = () => {
        if(count === -100){
            setCount(100);
        }
        else{
            setCount( count-100);
        }
    };
    return(
        <Container num={count}>
            <Slide num={0}>
                <Img/>
                <Txt/>
                <ArrowLeft onClick={SlideLeft}>&lt;</ArrowLeft>
                <ArrowRight onClick={SlideRight}>&gt;</ArrowRight>
            </Slide>
            <Slide num={1}>
            <Img/>
            <Txt/>
            <ArrowLeft onClick={SlideLeft}>&lt;</ArrowLeft>
            <ArrowRight onClick={SlideRight}>&gt;</ArrowRight>
            </Slide>
            <Slide num={2}>
                <Img/>
                <Txt/>
                <ArrowLeft onClick={SlideLeft}>&lt;</ArrowLeft>
                <ArrowRight onClick={SlideRight}>&gt;</ArrowRight>
            </Slide>

        </Container>

    )
};
export default Slideshow