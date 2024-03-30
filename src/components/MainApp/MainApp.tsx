import React, { FC } from "react";
import styles from "./MainApp.module.css";
import ExchangeItem from "../ExchangeItem/ExchangeItem";
import { useAppSelector } from "../../utils/types/hooksTypes";
import {
  getRatesArray,
  getRatesPending,
  getSelectedValue,
} from "../services/selectors/rateSelectors";
import loading from "../../image/loading2.svg";

const MainApp: FC = () => {
  const ratesPending = useAppSelector(getRatesPending)
  const selectedValue = useAppSelector(getSelectedValue);
  const rates = useAppSelector(getRatesArray);
  const keys = rates && Object.keys(rates!);
  const filterKeys = keys?.filter((key) => key !== selectedValue?.label);
  return (
    <main className={filterKeys && !ratesPending ? styles.main : styles.mainLoading}>
      {filterKeys && !ratesPending
        ? filterKeys.map((key: string, index) => (
            <ExchangeItem baseRate={key} key={index} id={index} />
          ))
        : (<img src={loading} className={styles.loading} />)}
    </main>
  );
};

export default MainApp;
