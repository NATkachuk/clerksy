import "./Section2.scss"
import Women from "../../../assets/Homepage/png/women.png"
import Man from "../../../assets/Homepage/png/man.png"
import stripe from "../../../assets/Homepage/svg/stripe.svg"
import google from "../../../assets/Homepage/svg/google.svg"
import notion from "../../../assets/Homepage/svg/notion.svg"
import gusto from "../../../assets/Homepage/svg/gusto.svg"
import aircall from "../../../assets/Homepage/svg/aircall.svg"

function Section2() {
  return (
    <section className="section2">
        <div className="section2-container1">
            <div className="section2-box">
                <img src={Women} alt="Women" className="section2-box__img" />
                <div className="section2-box__textbox">
                    <h2 className="section2-box__textbox-title">Put the human back in HR.</h2>
                    <p className="section2-box__textbox-text">Your employees are the real stars. Show the love and help them perform!</p>
                </div>
            </div>
            <div className="section2-box">
                <div className="section2-box__textbox">
                    <h2 className="section2-box__textbox-title">You don’t have to play all the parts.</h2>
                    <p className="section2-box__textbox-text">Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</p>
                </div>
                <img src={Man} alt="Man" className="section2-box__img" />
            </div>
        </div>
        <div className="section2-container2">
            <p className="section2-container2__text">We partner with the best</p>
            <div className="section2-box">
                <img src={stripe} alt="stripe" className="section2-box__img" />
                <img src={google} alt="google" className="section2-box__img" />
                <img src={notion} alt="notion" className="section2-box__img" />
                <img src={gusto} alt="gusto" className="section2-box__img" />
                <img src={aircall} alt="aircall" className="section2-box__img" />
            </div>
        </div>
    </section>
  )
}

export default Section2