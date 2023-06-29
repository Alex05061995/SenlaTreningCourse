import { createContext } from "react";

export enum DetailValue {
  INDIVIDUAL = 'individual',
  LEGALENTITY = 'legalEntity',
}

interface IDetailContextModal {
  value?: DetailValue;
  setValue?: (value: DetailValue) => void;
}

export const DetailContextModal = createContext<IDetailContextModal>({}) 