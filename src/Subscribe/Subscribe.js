import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  margin-top: 50px;
  padding: 15px 0;
  background: linear-gradient(to right,blue , blueviolet);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
   @media (min-width: 1200px) {
      flex-direction: row;
      padding: 50px 0;
  }
`;
const Input = styled.input`
  border-radius: 27px;
  font-size: 1rem;
  width: 250px;
  height: 54px;
  outline: none;
  color: #fff;
  padding: 0 10px;
  margin-bottom: 20px;
  border: 2px solid blueviolet;
  transition: all 1s ease-in-out;
  background: linear-gradient(to right,blue , blueviolet);
  &:focus{
    border: 2px solid #fff;
  }
   @media (min-width: 1200px) {
     margin: 0 50px 0 0 ;
    width: 700px;
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