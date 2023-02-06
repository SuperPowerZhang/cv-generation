import { createContext } from "react";
import { InfoType } from "../constants/type";

export const infoInitialValue: InfoType = {
  contact: null,
  basic: null,
};
export const InfoContext = createContext(infoInitialValue);

export const ThemeContext = createContext("light");
