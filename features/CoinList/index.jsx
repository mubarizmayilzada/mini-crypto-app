import Coin from "../../components/Coins";

export default function CoinList({ filteredCoins }) {
  return (
    <>
          <Coin
            name={filteredCoins.chartName}
            price={filteredCoins.bpi.USD.rate}
            symbol={filteredCoins.bpi.USD.code}
            marketcap={filteredCoins.bpi.USD.rate_float}
            volume={filteredCoins.bpi.USD.description}
            currency={'$'}
          />
          <Coin
            name={filteredCoins.chartName}
            price={filteredCoins.bpi.EUR.rate}
            symbol={filteredCoins.bpi.EUR.code}
            marketcap={filteredCoins.bpi.EUR.rate_float}
            volume={filteredCoins.bpi.EUR.description}
            currency={'€'}
          />
          <Coin
            name={filteredCoins.chartName}
            price={filteredCoins.bpi.GBP.rate}
            symbol={filteredCoins.bpi.GBP.code}
            marketcap={filteredCoins.bpi.GBP.rate_float}
            volume={filteredCoins.bpi.GBP.description}
            currency={'£'}
          />
    </>
  );
}