import { Link } from "react-router-dom";
import { User } from "../../types/userTypes";
import { styled } from "styled-components";

const LinkWrapperComponent = styled.div`
  display: flex;
  flex-direction: column;

  .link {
    font-size: 30px;
  }

  .link:not(:last-child) {
    margin-bottom: 30px;
  }

  .link:active {
    color: #b8aeae;
  }

  .link:hover {
    color: #d1aaaa;
  }

  .link:focus {
    color: #ddd0d0;
  }
`;

interface UsersListProps {
  users: User[];
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  return (
    <LinkWrapperComponent>
      {users.map((user) => {
        return (
          <Link className="link" to={`users/${user.id}`} key={user.id}>
            {user.username}
          </Link>
        );
      })}
    </LinkWrapperComponent>
  );
};
export default UsersList;
