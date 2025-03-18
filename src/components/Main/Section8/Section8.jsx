import "./Section8.scss"
import gras from "../../../assets/Homepage/png/gras.png"
import gras2 from "../../../assets/Homepage/png/gras2.png"
function Section8() {
  return (
    <section className="section8">
        <img src={gras} alt="gras" className="section8__img" />
        <div className="section8-container">
            <div className="section8-textbox">
                <h2 className="section8-textbox__title">Get Started With Clerksy</h2>
                <p className="section8-textbox__text">Make sure your business puts people first.</p>
            </div>
            <button className="section8-container__btn">Book a Free Discovery Call</button>
        </div>
        <img src={gras2} alt="gras2" className="section8__img" />
    </section>
  )
}

export default Section8