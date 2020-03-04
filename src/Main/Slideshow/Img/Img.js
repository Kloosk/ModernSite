import React from "react";
import styled from "styled-components";
import Image from '../../../img/drone/drone.png'

const Container = styled.div`
    z-index: 2;
    width: 400px;
    height: 300px;
   background-image: url(${Image});
   background-size: cover;
   background-position: center;
`;

const Img = () => {
    return(
        <Container></Container>
    )
};
export default Img