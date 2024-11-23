import './Header.css'

const Header = ({ title }) => {
    return (
        <header className="header">
            <div className="header-title">{title}</div>
            <div className="header-line"></div>
        </header>
    )
}

export default Header;