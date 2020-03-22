import React from "react";
import styled from "styled-components";
import Image from '../../../img/drone/drone.png'

const Container = styled.div`
   z-index: 2;
   width: 90vw;
   height: 30vh;
   background: url(${Image}) no-repeat center/cover;
   
    @media (min-width: 1200px) {
      width: 600px;
      height: 450px;
   }
`;

const Img = () => {
    return(
        <Container></Container>
    )
};
export default Img