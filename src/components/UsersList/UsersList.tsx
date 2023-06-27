import { useAppSelector } from '../../hooks/redux'
import UserCard from './UserCard/UserCard'
import cls from './UsersList.module.scss'

const UsersList = () => {
  const { users, error, isLoading } = useAppSelector(state => state.sliceUsers)
  return (
    <div className={cls.listWrapper}>
      <ul className={cls.list}>
        {users?.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
 
    </div>
  )
}

export default UsersList