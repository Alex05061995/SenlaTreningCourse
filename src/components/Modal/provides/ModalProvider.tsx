
import { useState, ReactNode } from 'react';
import { ModalContext, ModalContextProps } from '../context/ModalContext';


interface ModalProviderProps {
  children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const defaultValue:ModalContextProps = {
    open: isOpen,
    toggleState: setIsOpen
  }

  return (
    <ModalContext.Provider value={defaultValue}>
     {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider