import UserDetail from "../components/UserDetail/UserDetail";
import { useAppSelector } from "../hooks/useRedux";
import { useParams } from 'react-router-dom'

const DetailUserPage = () => {

  const params = useParams();

    const { users, isLoading } = useAppSelector(state => state.users);
    const user = users?.find(({id}) => id === Number(params.id));

    if(isLoading) {
      return <div>Загрузка</div>
    }

    else if(!user) {
      return (
        <div>Пользователь не найден</div>
      )
    }

  return (
    <UserDetail user={user} />
  )
}

export default DetailUserPage