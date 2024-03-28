import React, { FC } from "react";
import styles from "./MainApp.module.css";
import ExchangeItem from "../ExchangeItem/ExchangeItem";

const MainApp: FC = () => {
  return (
    <main className={styles.main}>
      <ExchangeItem />
    </main>
  );
};

export default MainApp;
