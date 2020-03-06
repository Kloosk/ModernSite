import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 105vw;
  margin-top: 50px;
  background: linear-gradient(to right,blue , blueviolet);
  padding: 50px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: rotate(5deg) translateX(-5vw);
`;
const Input = styled.input`
  border-radius: 27px;
  font-size: 1rem;
  width: 250px;
  height: 54px;
  outline: none;
  color: #fff;
  padding: 0 5px;
  margin-right: 50px;
  border: 2px solid blueviolet;
  transition: all 1s ease-in-out;
  background: linear-gradient(to right,blue , blueviolet);
  &:focus{
    border: 2px solid #fff;
  }
`;
const Btn = styled.button`
  padding: 5px 12px;
  background-color: #fff;
  color: dodgerblue;
  width: 150px;
  height: 54px;
  border-radius: 27px;
  transition: all 1s ease-in-out;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover{
  color: #fff;
  background-color: dodgerblue;
  }
`;
const Subscribe = () => {
    return(
        <Container>
            <Input placeholder="Enter your email adress" type="email"/>
            <Btn>SUBSCRIBE</Btn>
        </Container>
    )
};
export default Subscribe