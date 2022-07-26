import Head from 'next/head'
import { useState } from 'react';
import CoinList from '../features/CoinList';

export default function Home() {
  const [datas, setDatas] = useState({"chartName":"Bitcoin","bpi":{"USD":{"code":"USD","symbol":"&#36;","rate":"22,838.8258","description":"United States Dollar","rate_float":22838.8258},"GBP":{"code":"GBP","symbol":"&pound;","rate":"19,083.9401","description":"British Pound Sterling","rate_float":19083.9401},"EUR":{"code":"EUR","symbol":"&euro;","rate":"22,248.3508","description":"Euro","rate_float":22248.3508}}});

    const getDatas = async () => {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
      const filteredCoins = res.json();
      filteredCoins.then(
        result => {
          setDatas(result);
        }
      );
    }
    getDatas();


  return (
    <div>
      <Head>
        <title>Crypto currency app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <CoinList filteredCoins={datas}/>        
    </div>
  )
}