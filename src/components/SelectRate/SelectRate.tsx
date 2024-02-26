import React, { FC, RefObject } from "react";
import styles from "./SelectRate.module.css";

type TProps = {
  selectRef: RefObject<HTMLDivElement>;
};

const SelectRate: FC<TProps> = ({ selectRef }) => {
  return (
    <div ref={selectRef} className={styles.container}>
      <span className={`text text-default ${styles.selectText}`}>Select Rate</span>
    </div>
  );
};

export default SelectRate;
