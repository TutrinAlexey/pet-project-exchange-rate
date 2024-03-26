import { Dispatch, FC, RefObject, SetStateAction } from "react";
import styles from "./SelectRate.module.css";
import { TOptions } from "../../utils/types/selectrateTypes";
import { useAppDispatch, useAppSelector } from "../../utils/types/hooksTypes";
import { getSelectedValue } from "../services/selectors/rateSelectors";
import { getRates } from "../services/thunk/rateQuery";

type TProps = {
  selectRef: RefObject<HTMLDivElement>;
  options: TOptions[];
  setOpenSelect: Dispatch<SetStateAction<boolean>>;
  openSelect: boolean;
  onChange: (selection: TOptions) => void;
};

const SelectRate: FC<TProps> = ({
  selectRef,
  options,
  setOpenSelect,
  openSelect,
  onChange,
}) => {
  const selectedValue = useAppSelector(getSelectedValue);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container} ref={selectRef}>
      <div
        onClick={() => setOpenSelect(!openSelect)}
        className={`text text-default ${styles.buttonSelect}`}
      >
        <span className={styles.selectFlag}>{selectedValue?.flag} </span>
        <span className={styles.selectText}>{selectedValue?.label}</span>
      </div>
      {openSelect && (
        <ul className={styles.optionsContainer}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`text text-default ${styles.option}`}
              onClick={() => {
                onChange(option);
                setOpenSelect(!openSelect);
                dispatch(getRates(option.label))
              }}
            >
              <span className={styles.optionFlag}>{option.flag}</span>
              <span className={styles.optionText}>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectRate;
