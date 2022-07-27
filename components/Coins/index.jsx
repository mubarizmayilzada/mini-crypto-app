import styles from './Coins.module.css';

const CoinUsd = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  currency
}) => {
  return (
    <div className={styles.coin_container}>
      <div className={styles.coin_row}>
        <div className={styles.coin}>
          <img src='http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png' alt={name} className={styles.coin_img} />
          <h1 className={styles.coin_h1}>{name}</h1>
        </div>
        { <div className={styles.coin_data}>
        <p className={styles.coin_symbol}>{symbol}</p>
          <p className={styles.coin_price}>{currency} {price}</p>
          <p className={styles.coin_volume}>{volume.toLocaleString()}</p>
          <p className={styles.coin_marketcap}>
            Mkt Cap: <span className={styles.coin_mkt}>
            {currency} {marketcap.toLocaleString()}
              </span> 
          </p>
        </div> }
      </div>
    </div>
  );
};

export default CoinUsd;