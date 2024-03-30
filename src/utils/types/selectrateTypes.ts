import { FlagComponent } from "country-flag-icons/react/3x2";
import { ReactElement } from "react";

export type TOptions = {
    label: string;
    value: string | number;
    flag: ReactElement;
    valueIcon: string;
    fullName: string;
  }

  export type TSelected = {
    label: string;
    value: string | number;
    flag: FlagComponent;
  }