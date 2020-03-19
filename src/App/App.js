import React from "react";
import styled,{createGlobalStyle} from "styled-components";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";
import Reviews from "../Reviews/Reviews";
import FollowUs from "../FollowUs/FollowUs";
import WeekOffer from "../WeekOffer/WeekOffer";
import ReadMore from "../ReadMore/ReadMore";
import PopularItems from "../PopularItems/PopularItems";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Lato', sans-serif;
      scroll-behavior: smooth;
    }
`;
const Container = styled.div`
    overflow-x: hidden;
    background-color: #fff;
`;
const App = () => {
  return(
      <Container>
        <GlobalStyle/>
        <Nav/>
        <Main/>
        <Header/>
        <Subscribe/>
        <WeekOffer/>
        <PopularItems/>
        <ReadMore/>
        <Reviews/>
        <FollowUs/>
        <Footer/>
      </Container>
  )
};
export default App