import React from "react";
import styled from "styled-components";
import Image from '../../../img/drone/drone.png'

const Container = styled.div`
   z-index: 2;
   width: 90vw;
   height: 30vh;
   background: url(${Image}) no-repeat center/cover;
`;

const Img = () => {
    return(
        <Container></Container>
    )
};
export default Img