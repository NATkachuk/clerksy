import "./Header.scss"
import Logo from "../../assets/Homepage/svg/Logo.svg"
function Header() {
  return (
    <header className="header">
     <a href="" className="header-link"><img src={Logo} alt="Logo" className="header-img" /></a>
     <div className="header-container">
        <a href="" className="header-container__link">Log In</a>
        <a href="" tel="8443326440" className="header-container__tell">844-332-6440</a>
        <button className="header-container__btn">Get Started</button>
     </div>
    </header>
  )
}

export default Header