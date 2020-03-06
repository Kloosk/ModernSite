import React from "react";
import styled from "styled-components";
import Card from "./Card/Card";

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
 
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
  font-size: 2rem;
  color: #000;
  min-width: 45%;
  text-align: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
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