import { Link } from "react-router-dom";
import { User } from "../../types/userTypes";
import cls from './UserList.module.scss';

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <div className={cls.linkWrapper}>
      {users.map((user) => {
        return <Link className={cls.link} to={`users/${user.id}`} key={user.id}>{user.username}</Link>;
      })}
    </div>
  );
};
export default UsersList;
