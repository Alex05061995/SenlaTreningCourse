import UsersList from "../components/UserList/UsersList"
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { useEffect } from 'react'
import allActions from "../store/actions";

const HomePage = () => {

  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(allActions.allUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  } else if (error) {
    return <div>Ошибка загрузки</div>;
  }
  return (
    <UsersList users={users} />
  )
}

export default HomePage