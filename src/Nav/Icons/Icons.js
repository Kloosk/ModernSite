import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconCart = styled.div`
    position: relative;
`;
const Cart = styled.svg`
  width: 20px;
  height: 20px;
  color: inherit;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;
`;
const CartMenu = styled.div`
    position: absolute;
    top: 155%;
    right: -40px;
    width: 90vw;
    background-color: #fff;
    display: none;
    ${IconCart}:hover & {
     display: block;
  }
  @media (min-width: 1200px) {
     width: 40vw;
     top: 100%;
     right: 0;
  }
`;
const Head = styled.div`
  color: #000;
  border-bottom: 1px solid blueviolet;
  width: 100%;
  padding: 15px 20px;
  font-size: 1.2rem;
`;
const Body = styled.div`
  color: #000;
  width: 100%;
  text-align: center;
  padding: 100px 10px;
  font-size: 0.9rem;
`;
const IconSeek = styled.div`
  position: relative;
`;
const Seek = styled.svg`
  width: 20px;
  height: 20px;
  color: inherit;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 10px;
`;
const Search = styled.svg`
  width: 20px;
  height: 20px;
  color: blueviolet;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 auto;
  @media (min-width: 1200px) {
     font-size: 3rem;
     margin: 0 auto;
  }
`;
const SeekMenu = styled.div`
    position: absolute;
    top: 150%;
    right: 0;
    width: 90vw;
    background-color: #fff;
    display: none;
    ${IconSeek}:hover & {
     display: block;
  }
  @media (min-width: 1200px) {
     width: 40vw;
     top: 100%;
     right: 0;
  }
`;
const SeekBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Input = styled.input`
  width: 85%;
  padding: 20px 15px;
  font-size: 1.2rem;
`;
const Icons = () => {
    return(
        <Container>
            <IconCart>
                <Cart aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                </Cart>
                <CartMenu>
                    <Head>
                        <h1>My Cart</h1>
                    </Head>
                    <Body>
                        <h1>You have no items in your shopping cart.</h1>
                    </Body>
                </CartMenu>
            </IconCart>
            <IconSeek>
                <Seek aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </Seek>
                <SeekMenu>
                    <Head>
                        <h1>Search</h1>
                    </Head>
                    <SeekBody>
                        <Input type="search"/>
                        <Search aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </Search>
                    </SeekBody>
                </SeekMenu>
            </IconSeek>
        </Container>
    )
};
export default Icons