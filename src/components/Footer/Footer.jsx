import "./Footer.scss"
import logo2 from "../../assets/Homepage/svg/logo2.svg"
import facebook from "../../assets/Homepage/svg/facebook.svg"
import twitter from "../../assets/Homepage/svg/twitter.svg"
import linkedin from "../../assets/Homepage/svg/linkedin.svg"
import insta from "../../assets/Homepage/svg/insta.svg"
function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container1">
            <a href="" className="footer-container1__link"><img src={logo2} alt="logo2" className="footer-container1__link-img" /></a>
            <h2 className="footer-container1__title">A people company.</h2>
            <div className="footer-box">
                <img src={facebook} alt="facebook" className="footer-box__img" />
                <img src={twitter} alt="twitter" className="footer-box__img" />
                <img src={linkedin} alt="linkedin" className="footer-box__img" />
                <img src={insta} alt="insta" className="footer-box__img" />
            </div>
        </div>
        <div className="footer-container2">
            <p className="footer-container2__text">© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</p>
            <ul className="footer-container2__list">
                <li className="footer-container2__item">
                    <a href="" className="footer-container2__link">Privacy Policy</a>
                </li>
                <li className="footer-container2__item">
                    <a href="" className="footer-container2__link">Terms of Service</a>
                </li>
                <li className="footer-container2__item">
                    <a href="" className="footer-container2__link">GDPR</a>
                </li>
                <li className="footer-container2__item">
                    <a href="" className="footer-container2__link">Careers</a>
                </li>
                <li className="footer-container2__item">
                    <a href="" className="footer-container2__link">Press Kit</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer