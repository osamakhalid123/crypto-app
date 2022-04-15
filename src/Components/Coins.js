import React from "react";
import styled from "styled-components";

function Coins({ name, price, symbol, marketcap, volume, image, priceChange }) {
  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <td>
              <p> {name} </p>
            </td>
            <td>
              <img src={image} alt="$" />
            </td>
            <td>
              <p>${price.toLocaleString()}</p>
            </td>
            <td>
              <p>{symbol}</p>
            </td>
            <td>
              <p>${marketcap.toLocaleString()}</p>
            </td>
            <td>
              <p>${volume.toLocaleString()}</p>
            </td>
            <td>
              {priceChange > 0 ? (
                <p style={{ color: "green" }}>↑ {priceChange}</p>
              ) : (
                <p style={{ color: "red" }}>{priceChange} ↓</p>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

const Table = styled.table`
  border-collapse: collapse;
  width: 90vw;
`;
const Container = styled.div`
  display: flex;

  text-align: center;

  p {
    font-size: 20px;
    color: white;
  }
  img {
    width: 80px;
    height: 70px;
    margin: 20px 0px;
  }

  td {
    width: 12%;
    border: 1px solid white;
    padding: 30px 0px;
  }
`;

export default Coins;
