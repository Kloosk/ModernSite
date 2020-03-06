import React from "react";
import styled,{createGlobalStyle} from "styled-components";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Subscribe from "../Subscribe/Subscribe";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
`;
const Container = styled.div`

`;
const App = () => {
  return(
      <Container>
        <GlobalStyle/>
        <Nav/>
        <Main/>
        <Header/>
        <Subscribe/>
        <Footer/>
      </Container>
  )
};
export default App