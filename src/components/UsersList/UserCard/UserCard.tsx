import { Link } from "react-router-dom"
import { UserType } from "../../../types/user"
import cls from './UserCard.module.scss'

interface UserCardProps {
    user: UserType
}

const UserCard:React.FC<UserCardProps> = ({ user }) => {
  return (
    <li className={cls.item}>
        <Link className={cls.text} to={`users/${user.id}`}>{user.name}</Link>
    </li>
  )
}

export default UserCard