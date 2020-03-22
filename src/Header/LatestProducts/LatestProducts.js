import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
   @media (min-width: 1200px) {
      padding: 50px 100px;
  }
 
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Hr = styled.hr`
  height: 4px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: blueviolet;
`;
const H1 = styled.h1`
  font-size: 1.7rem;
  color: #000;
  min-width: 70%;
  text-align: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
  @media (min-width: 1200px) {
      grid-template-columns: repeat(3,1fr);
      grid-gap: 100px;
  }
`;
const LatestProducts = () => {
    return(
        <Container>
            <Title>
                <Hr/><H1>Latest Products</H1><Hr/>
            </Title>
            <Grid>
                <Card/>
                <Card/>
                <Card/>
            </Grid>
        </Container>
    )
};
export default LatestProducts