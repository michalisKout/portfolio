import { Dispatch, SetStateAction } from "react";

export type DarkModeContextType = {
  isDarkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};
