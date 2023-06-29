import Modal from "../../components/Modal/Modal";
import { useContext, useState } from "react";
import { ModalContext } from "../../components/Modal/context/ModalContext";
import DetailModal from "./DetailModal";
import AgreementModal from "./AgreementModal";
import ConfirmModal from "./ConfirmModal";
import { ConfirmModalContext } from "./ConfirmModal/context/ConfirmModalContext";
import { DetailContextModal, DetailValue } from "./DetailModal/context/DetailModalContext";

const UserConfirmModal = () => {
  const { toggleState } = useContext(ModalContext);

  const [isOpenedDetail, setIsOpenedDetail] = useState(false);
  const [isOpenedConfirm, setIsOpenedConfirm] = useState(true);
  const [isOpenedAgreement, setIsOpenedAgreement] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [detailModalValue, setDetailModalValue] = useState<DetailValue>(DetailValue.INDIVIDUAL);

  const cancelDetailModal = () => {
    if (toggleState) {
      toggleState(false);
    }
  };

  const saveDetailModal = () => {
    if (toggleState) {
      toggleState(false);
    }
  };

  const openWindowDetail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpenedDetail(true);
    setIsOpenedConfirm(false);
  };

  const pushBackDetail = () => {
    setIsOpenedDetail(false);
    setIsOpenedConfirm(true);
  };

  const pushForwardDetail = () => {
    setIsOpenedAgreement(true);
    setIsOpenedDetail(false);
  };

  const pushBackAgreement = () => {
    setIsOpenedAgreement(false);
    setIsOpenedDetail(true);
  };

  const confirm = () => {
    if (toggleState) {
      toggleState(false);
    }
  };

  return (
    <Modal>
      <ConfirmModalContext.Provider
        value={{ value: isChecked, setValue: setIsChecked }}
      >
        <DetailContextModal.Provider value={{ value: detailModalValue, setValue: setDetailModalValue }}>
          {isOpenedConfirm && (
            <ConfirmModal
              cancelDetailModal={cancelDetailModal}
              openWindowDetail={openWindowDetail}
              saveDetailModal={saveDetailModal}
            />
          )}
          {isOpenedDetail && (
            <DetailModal
              onClickBack={pushBackDetail}
              onClickForward={pushForwardDetail}
            />
          )}
          {isOpenedAgreement && (
            <AgreementModal
              onClickBack={pushBackAgreement}
              onClickConfirm={confirm}
            />
          )}
        </DetailContextModal.Provider>
      </ConfirmModalContext.Provider>
    </Modal>
  );
};

export default UserConfirmModal;
