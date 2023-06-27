import { UserType } from "../../types/user"

interface UserProps {
    user: UserType
}

const UserDetail:React.FC<UserProps> = ({ user }) => {
  return (
    <div>
        <h1>{user.name}</h1>
        <div>
            {user.id}
            {user.email}
            {user.phone}
            {user.username}
        </div>
    </div>
  )
}

export default UserDetail