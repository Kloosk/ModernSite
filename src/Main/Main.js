import React from "react";
import Slideshow from "./Slideshow/Slideshow";
import styled from "styled-components";

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
    return(
        <Container>
            <Slideshow/>
        </Container>
    )
};
export default Main