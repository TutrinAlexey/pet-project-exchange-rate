import { useAppDispatch } from "../../utils/types/hooksTypes";
import Layout from "../Layout/Layout";
import { getRates } from "../services/thunk/rateQuery";
import styles from "./App.module.css";
import { FC, useEffect } from "react";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRates("RUB"));
  }, []);

  return (
    <div className={styles.app}>
      <Layout />
    </div>
  );
};

export default App;
