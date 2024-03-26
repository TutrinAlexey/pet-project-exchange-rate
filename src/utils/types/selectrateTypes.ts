import { FlagComponent } from "country-flag-icons/react/3x2";
import { ReactElement } from "react";

export type TOptions = {
    label: string;
    value: string | number;
    flag: ReactElement
  }

  export type TSelected = {
    label: string;
    value: string | number;
    flag: FlagComponent;
  }