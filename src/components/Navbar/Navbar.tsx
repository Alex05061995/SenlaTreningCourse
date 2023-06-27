import cls from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
        <h1 className={cls.maintitle}>список пользователей</h1>
    </nav>
  )
}

export default Navbar