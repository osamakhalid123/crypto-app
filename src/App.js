import "./App.css";
import { React, useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import Coins from "./Components/Coins";
import TableHead from "./Components/TableHead";
import styled from "styled-components";
function App() {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  const GetData = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const response = await fetch(url);
    const data = await response.json();
    setCoin(data);
  };

  useEffect(() => {
    GetData();
    const interval = setInterval(() => {
      GetData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const ChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const filterdata = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar change={ChangeHandler} />
      <Table>
        <TableHead />
        {filterdata.map((coin) => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </Table>
    </div>
  );
}

const Table = styled.table`
  height: 100vh;
  border-collapse: collapse;
  margin: 3rem auto;
`;
export default App;
