import React, { FC } from "react";
import styles from "./ExchangeItem.module.css";
import exhangeIcon from "../../image/exchange-svgrepo-com.svg";
import { US } from "country-flag-icons/react/3x2";

const ExchangeItem: FC = () => {
  return (
    <div className={styles.item}>
      <div className={styles.baseValue}>
        <h3 className={`text text-default ${styles.header}`}>
          <US title="United States" className={styles.flags} />
          EUR-Euro
        </h3>
        <div className={styles.inputContainer}>
          <input
            className={`text text-default ${styles.input}`}
            type="number"
          />
          <span className={`text text-default ${styles.valueIcon}`}>R$</span>
        </div>
      </div>
      <div className={styles.convert}>
        <img
          src={exhangeIcon}
          alt="exchange icon"
          className={styles.exchangeIcon}
        />
        <button type="button" className={styles.buttonConvert}>
          Convert
        </button>
      </div>
      <div className={styles.exchangeValue}>
        <h3 className={`text text-default ${styles.header}`}>
          <US title="United States" className={styles.flags} />
          KRW - South Korean Won
        </h3>
        <div className={styles.inputContainer}>
          <input
            className={`text text-default ${styles.input}`}
            type="number"
          />
          <span className={`text text-default ${styles.valueIcon}`}>د. إ</span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeItem;
