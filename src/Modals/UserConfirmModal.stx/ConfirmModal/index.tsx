import React, { useContext } from "react";
import { styled } from "styled-components";
import { ConfirmModalContext } from "./context/ConfirmModalContext";

const ConfirmModalWrapper = styled.div`
  padding: 10px;

  .wrap {
    margin-bottom: 20px;
  }

  .link-more {
    text-decoration: underline;
    color: blue;
  }
`;

interface IConfirmModal {
  openWindowDetail: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  cancelDetailModal?: () => void;
  saveDetailModal?: () => void;
}

export const ConfirmModal: React.FC<IConfirmModal> = ({
  cancelDetailModal,
  openWindowDetail,
  saveDetailModal,
}) => {
  const { setValue, value } = useContext(ConfirmModalContext);

  const checkInput = () => {
    if (setValue) {
      setValue(!value);
    }
  };

  return (
    <ConfirmModalWrapper>
      <h3>Пользовательское соглашение</h3>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor excepturi
        architecto nulla adipisci dignissimos placeat, minima quisquam quaerat
        fugit soluta vitae debitis voluptates, natus doloremque, impedit vel
        iste ducimus dolorem!
      </div>
      <div className="wrap">
        <a href="№" onClick={(e) => openWindowDetail(e)} className="link-more">
          Подробнее
        </a>
        <input type="checkbox" checked={value} onChange={checkInput} /> Даю
        согласие
      </div>
      <div>
        <button onClick={cancelDetailModal}>Отмена</button>
        <button onClick={saveDetailModal} disabled={!value}>
          Сохранить
        </button>
      </div>
    </ConfirmModalWrapper>
  );
};

export default ConfirmModal;
