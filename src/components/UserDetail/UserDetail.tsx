import { User } from "../../types/userTypes";
import { styled } from "styled-components";

const WrapperDetail = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .info {
    font-size: 20px;
  }

  .info:not(:last-child) {
    margin-bottom: 10px;
  }
`

interface UserDetailProps {
  user: User;
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  return (
    <WrapperDetail>
      <h2 className="title">{user.username}</h2>
      <span className="info">{user.id}</span>
      <span  className="info">{user.email}</span>
      <span  className="info">{user.phone}</span>
      <span  className="info">{user.website}</span>
      <span  className="info">{user.company?.name} / {user.company?.catchPhrase}</span>
    </WrapperDetail>
  )
}

export default UserDetail