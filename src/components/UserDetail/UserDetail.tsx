import { User } from "../../types/userTypes"

interface UserDetailProps {
  user: User;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <div style={{display: "flex", flexDirection: 'column'}}>
      <h2>{user.username}</h2>
      <span>{user.id}</span>
      <span>{user.email}</span>
      <span>{user.phone}</span>
      <span>{user.website}</span>
      <span>{user.company?.name} / {user.company?.catchPhrase}</span>
    </div>
  )
}

export default UserDetail