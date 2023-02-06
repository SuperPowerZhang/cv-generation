import { createContext } from "react";
import { InfoType } from "./type";

export const infoInitialValue: InfoType = {
  contact: null,
  basic: null,
};
export const InfoContext = createContext(infoInitialValue);

export const themeContext = createContext("light");
