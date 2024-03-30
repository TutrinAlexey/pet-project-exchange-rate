import React, { FC, useState } from "react";
import styles from "./ExchangeItem.module.css";
import exhangeIcon from "../../image/exchange-svgrepo-com.svg";
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
import { useAppSelector } from "../../utils/types/hooksTypes";
import {
  getRatesArray,
  getSelectedValue,
} from "../services/selectors/rateSelectors";
import { TOptions } from "../../utils/types/selectrateTypes";

type TProps = {
  baseRate: string;
  id: number;
};

const ExchangeItem: FC<TProps> = ({ baseRate, id }) => {
  const selectedValue = useAppSelector(getSelectedValue);
  const rates = useAppSelector(getRatesArray);
  const baseInput = document.getElementById(
    `baseInput${id}`
  ) as HTMLInputElement;
  const inputValue = Number(baseInput?.value);
  const options: TOptions[] = [
    {
      label: "EUR",
      value: "1",
      flag: <EU title="Europe" className={styles.flags} />,
      valueIcon: "€",
      fullName: "Euro",
    },
    {
      label: "USD",
      value: "2",
      flag: <US title="United States" className={styles.flags} />,
      valueIcon: "$",
      fullName: "US Dollar",
    },
    {
      label: "RUB",
      value: "3",
      flag: <RU title="Russia" className={styles.flags} />,
      valueIcon: "₽",
      fullName: "Russian Ruble",
    },
    {
      label: "AED",
      value: "4",
      flag: <AE title="Arabic United Emirates" className={styles.flags} />,
      valueIcon: "د. إ",
      fullName: "Emirati Dirham",
    },
    {
      label: "TRY",
      value: "5",
      flag: <TR title="Turkey" className={styles.flags} />,
      valueIcon: "₺",
      fullName: "Turkish Lira",
    },
    {
      label: "CNY",
      value: "6",
      flag: <CN title="China" className={styles.flags} />,
      valueIcon: "¥",
      fullName: "Chinese Yuan",
    },
    {
      label: "KZT",
      value: "7",
      flag: <KZ title="Kazakhstan" className={styles.flags} />,
      valueIcon: "₸",
      fullName: "Kazakhstani Tenge",
    },
    {
      label: "ILS",
      value: "8",
      flag: <IL title="Israel" className={styles.flags} />,
      valueIcon: "₪",
      fullName: "Israeli Shekel",
    },
    {
      label: "BYN",
      value: "9",
      flag: <BY title="Republic of Belarus" className={styles.flags} />,
      valueIcon: "Br",
      fullName: "Belarusian Ruble",
    },
    {
      label: "BRL",
      value: "10",
      flag: <BR title="Brazil" className={styles.flags} />,
      valueIcon: "R$",
      fullName: "Brazilian Real",
    },
    {
      label: "UAH",
      value: "11",
      flag: <UA title="Ukraine" className={styles.flags} />,
      valueIcon: "₴",
      fullName: "Ukrainian Hryvnia",
    },
    {
      label: "JPY",
      value: "12",
      flag: <JP title="Japan" className={styles.flags} />,
      valueIcon: "¥",
      fullName: "Japanese Yen",
    },
    {
      label: "KRW",
      value: "13",
      flag: <KR title="Republic of Korea" className={styles.flags} />,
      valueIcon: "₩",
      fullName: "South Korean Won",
    },
    {
      label: "CAD",
      value: "14",
      flag: <CA title="Canada" className={styles.flags} />,
      valueIcon: "$",
      fullName: "Canadian Dollar",
    },
  ];
  const currentValue = options.find((option) => option.label === baseRate);
  const rate = rates![baseRate as "RUB"];

  const [secondValue, setSecondValue] = useState(rate);
  const [baseValue, setBaseValue] = useState<number | string>(1);

  return (
    <div className={styles.item}>
      <div className={styles.baseValue}>
        <h3 className={`text text-default ${styles.header}`}>
          <span className={styles.baseFlag}>{selectedValue?.flag} </span>
          <span className={styles.baseText}>
            {selectedValue?.label} - {selectedValue?.fullName}
          </span>
        </h3>
        <div className={styles.inputContainer}>
          <input
            id={`baseInput${id}`}
            className={`text text-default ${styles.input}`}
            type="number"
            value={baseValue}
            onChange={(e) => setBaseValue(baseInput?.value)}
          />
          <span className={`text text-default ${styles.valueIcon}`}>
            {selectedValue?.valueIcon}
          </span>
        </div>
      </div>
      <div className={styles.convert}>
        <img
          src={exhangeIcon}
          alt="exchange icon"
          className={styles.exchangeIcon}
        />
        <button
          type="button"
          className={styles.buttonConvert}
          onClick={() => rate && setSecondValue(rate * inputValue)}
        >
          Convert
        </button>
      </div>
      <div className={styles.exchangeValue}>
        <h3 className={`text text-default ${styles.header}`}>
          <span className={styles.baseFlag}>{currentValue?.flag} </span>
          <span className={styles.baseText}>
            {currentValue?.label} - {currentValue?.fullName}
          </span>
        </h3>
        <div className={styles.inputContainer}>
          <input
            className={`text text-default ${styles.input}`}
            type="number"
            disabled
            value={secondValue}
          />
          <span className={`text text-default ${styles.valueIcon}`}>
            {currentValue?.valueIcon}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExchangeItem;
