import UsersList from "../components/UserList/UsersList";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useContext, useEffect } from "react";
import allActions from "../store/actions";
import { ModalContext } from "../components/Modal/context/ModalContext";
import UserConfirmModal from "../Modals/UserConfirmModal.stx";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.users);
  const { open, toggleState } = useContext(ModalContext);

  const handleOpen = () => {
    if (toggleState) {
      toggleState(!open);
    }
  };

  useEffect(() => {
    dispatch(allActions.allUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  } else if (error) {
    return <div>Ошибка загрузки</div>;
  }
  return (
    <>
      <UsersList users={users} />
      <button onClick={handleOpen}>Открыть модальное окно</button>
      {open && <UserConfirmModal />}
    </>
  );
};

export default HomePage;
