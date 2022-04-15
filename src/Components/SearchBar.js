import React from "react";
import styled from "styled-components";

function SearchBar({ change }) {
  return (
    <Container>
      <Head> Top 100 Cryptocurrencies </Head>{" "}
      <Input onChange={change} type="text" placeholder="Search" />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Head = styled.h1`
  color: white;
  font-size: 40px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
`;

export default SearchBar;
