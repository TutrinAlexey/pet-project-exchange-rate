import { FC, useEffect, useRef, useState } from "react";
import styles from "./HeaderApp.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";
import SelectRate from "../SelectRate/SelectRate";
import { useAppDispatch, useAppSelector } from "../../utils/types/hooksTypes";
import { getRates } from "../services/thunk/rateQuery";
import { getRatesArray } from "../services/selectors/rateSelectors";

const HeaderApp: FC = () => {
  const dispatch = useAppDispatch()
  const rates = useAppSelector(getRatesArray)
  const [isOpen, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside(selectRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  useEffect(() => {
    dispatch(getRates())
  }, [])

  console.log(rates)
  return (
    <header className={styles.header}>
      <h1 className={`text text-header ${styles.headerText}`}>
        <span className={styles.blue}>E</span>xchange{" "}
        <span className={styles.blue}>R</span>ate
      </h1>
      <SelectRate selectRef={selectRef} />
    </header>
  );
};

export default HeaderApp;
