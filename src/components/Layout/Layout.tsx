import { FC, useEffect } from "react";
import styles from "./Layout.module.css";
import HeaderApp from "../HeaderApp/HeaderApp";
import MainApp from "../MainApp/MainApp";

const Layout: FC = () => {
  return (
  <>
  <HeaderApp />
  <MainApp />
  </>
  );
};

export default Layout;
