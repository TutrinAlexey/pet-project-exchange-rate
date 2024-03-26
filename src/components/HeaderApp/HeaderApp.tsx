import { FC, useEffect, useRef, useState } from "react";
import styles from "./HeaderApp.module.css";
import { useClickOutside } from "../../hooks/useClickOutside";
import SelectRate from "../SelectRate/SelectRate";
import { useAppDispatch, useAppSelector } from "../../utils/types/hooksTypes";
import { getRates } from "../services/thunk/rateQuery";
import {
  getRatesArray,
  getSelectedValue,
} from "../services/selectors/rateSelectors";
import { TOptions } from "../../utils/types/selectrateTypes";
import {
  AE,
  BR,
  BY,
  CA,
  CN,
  EU,
  IL,
  JP,
  KR,
  KZ,
  RU,
  TR,
  UA,
  US,
} from "country-flag-icons/react/3x2";
import { setSelectedValue } from "../services/slices/rateSlice";

const HeaderApp: FC = () => {
  const dispatch = useAppDispatch();
  const rates = useAppSelector(getRatesArray);
  const [isOpen, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const option: TOptions[] = [
    {
      label: "EUR",
      value: "1",
      flag: <EU title="Europe" className={styles.flags} />,
    },
    {
      label: "USD",
      value: "2",
      flag: <US title="United States" className={styles.flags} />,
    },
    {
      label: "RUB",
      value: "3",
      flag: <RU title="Russia" className={styles.flags} />,
    },
    {
      label: "AED",
      value: "4",
      flag: <AE title="Arabic United Emirates" className={styles.flags} />,
    },
    {
      label: "TRY",
      value: "5",
      flag: <TR title="Turkey" className={styles.flags} />,
    },
    {
      label: "CNY",
      value: "6",
      flag: <CN title="China" className={styles.flags} />,
    },
    {
      label: "KZT",
      value: "7",
      flag: <KZ title="Kazakhstan" className={styles.flags} />,
    },
    {
      label: "ILS",
      value: "8",
      flag: <IL title="Israel" className={styles.flags} />,
    },
    {
      label: "BYN",
      value: "9",
      flag: <BY title="Republic of Belarus" className={styles.flags} />,
    },
    {
      label: "BRL",
      value: "10",
      flag: <BR title="Brazil" className={styles.flags} />,
    },
    {
      label: "UAH",
      value: "11",
      flag: <UA title="Ukraine" className={styles.flags} />,
    },
    {
      label: "JPY",
      value: "12",
      flag: <JP title="Japan" className={styles.flags} />,
    },
    {
      label: "KRW",
      value: "13",
      flag: <KR title="Republic of Korea" className={styles.flags} />,
    },
    {
      label: "CAD",
      value: "14",
      flag: <CA title="Canada" className={styles.flags} />,
    },
  ];

  useEffect(() => {
    dispatch(
      setSelectedValue({
        label: "RUB",
        value: "3",
        flag: <RU title="Russia" className={styles.flags} />,
      })
    );
  }, []);

  useClickOutside(selectRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  console.log(rates);
  return (
    <header className={styles.header}>
      <h1 className={`text text-header ${styles.headerText}`}>
        <span className={styles.blue}>E</span>xchange{" "}
        <span className={styles.blue}>R</span>ate
      </h1>
      <SelectRate
        onChange={(selection: TOptions) =>
          dispatch(setSelectedValue(selection))
        }
        setOpenSelect={setOpen}
        openSelect={isOpen}
        selectRef={selectRef}
        options={option}
      />
    </header>
  );
};

export default HeaderApp;
