import { createContext } from "react";

interface IConfirmModal {
  value?: boolean;
  setValue?: (value:boolean) => void;
}


export const ConfirmModalContext = createContext<IConfirmModal>({});