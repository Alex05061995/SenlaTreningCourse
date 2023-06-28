import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavComponent = styled.nav`
  padding: 20px;
  height: ${(props) => props.theme.heights.headerHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);

  .linkWrapper {
    display: flex;
    justify-content: space-between;
  }

  .link {
    padding: 0 10px;
  }
`

const NavBar = () => {
  return (
    <NavComponent>
      <h1>Список пользователей</h1>
      <div className='linkWrapper'>
        <Link className='link' to={'##'}>
          Ссылка 1
        </Link>
        <Link className='link' to={'##'}>
          Ссылка 2
        </Link>
      </div>
    </NavComponent>
  )
}

export default NavBar