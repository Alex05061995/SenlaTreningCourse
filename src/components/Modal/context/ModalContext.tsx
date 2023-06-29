import { createContext } from "react";

export interface ModalContextProps {
  toggleState?: (open:boolean) => void;
  open?:boolean;
}

export const ModalContext = createContext<ModalContextProps>({});