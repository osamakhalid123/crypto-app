import React from "react";
import styled from "styled-components";

function TableHead() {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Symbol</th>
            <th>Marketcap</th>
            <th>Volume</th>
            <th>PriceChange</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
}

const Table = styled.table`
  border-collapse: collapse;
  width: 90vw;
`;

const Container = styled.div`
  text-align: center;
  display: flex;

  th {
    border-right: 1px solid white;
    padding: 1rem 0px;
    color: white;
    font-size: larger;
    width: 10%;
  }
  tr {
    border: 1px solid white;
  }
`;

export default TableHead;
