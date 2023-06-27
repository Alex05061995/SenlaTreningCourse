import { Link } from 'react-router-dom';
import cls from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={cls.nav}>
      <h1>Список пользователей</h1>
      <div className={cls.linkWrapper}>
        <Link className={cls.link} to={'##'}>
          Ссылка 1
        </Link>
        <Link className={cls.link} to={'##'}>
          Ссылка 2
        </Link>
      </div>
    </nav>
  )
}

export default NavBar