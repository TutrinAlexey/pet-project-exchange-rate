import Layout from '../Layout/Layout';
import styles from './App.module.css'
import { FC } from "react";

const App:FC = () => {
  return (
    <div className={styles.app}>
      <Layout />
    </div>
  );
};

export default App;
