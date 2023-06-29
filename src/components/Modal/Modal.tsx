import { createPortal } from 'react-dom'
import { styled } from 'styled-components'
import { ReactNode, useContext } from 'react';
import { MdClose } from 'react-icons/md'
import { ModalContext } from './context/ModalContext';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  .icon {
    position: absolute;
    right: 20px;
    top: 20px;
    color: white;
    z-index: 1000;
    cursor: pointer;
  }

  .box {
    width: 100%;
    max-width: 400px;
    background: white;
    border-radius: 20px;
  }
` 

interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {

  const { open, toggleState } = useContext(ModalContext)

  const modalHandler = () => {
    if(toggleState) {
      toggleState(!open)
    } else {
      console.log('nooooo');
      
    }
  }

  return createPortal(
    <ModalWrapper>
      <MdClose size={30} className='icon' onClick={modalHandler} />
      <div className='box'>
        {children}
      </div>
    </ModalWrapper>,
    document.body
  )
}

export default Modal