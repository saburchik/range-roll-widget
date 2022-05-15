import s from './Navbar.module.scss'

const Navbar: React.FC = () => {

    return (
        <ul className={s.menu}>
            <li>Main</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    )
}

export default Navbar