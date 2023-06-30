import React, { useContext, useRef, useState } from 'react'
import { styled } from 'styled-components';
import { DetailContextModal, DetailValue } from './context/DetailModalContext';

const DetailModalWrapper = styled.div`
  padding: 10px;
`;

interface DetailModalProps {
  onClickForward?: () => void;
  onClickBack?: () => void
}

const DetailModal: React.FC<DetailModalProps>  = ({ onClickBack, onClickForward }) => {
  const { setValue, value } = useContext(DetailContextModal);
  const [checked, setChecked] = useState('')
  const detailInputRef = useRef(null);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked && setValue) {
      setValue(e.target.value as any);
      setChecked(e.target.value);
      console.log(value, checked);
    } 
  }

  console.log(value);
  

  return (
    <DetailModalWrapper>
          <h3>Кто вы</h3>
          <div>
            <input type="radio" name='name' value={DetailValue.INDIVIDUAL} onChange={(e) => handleCheck(e)} ref={detailInputRef} defaultChecked={value === DetailValue.INDIVIDUAL} />
            Физ.лицо
            <input type="radio" name='name' value={DetailValue.LEGALENTITY} onChange={(e) => handleCheck(e)} ref={detailInputRef} defaultChecked={value === DetailValue.LEGALENTITY}/>
            Юр.лицо
            <div>
              <button onClick={onClickBack}>Назад</button>
              <button onClick={onClickForward}>Далее</button>
            </div>
          </div>
    </DetailModalWrapper>
  )
}

export default DetailModal 