import "./Section7.scss"
import human from "../../../assets/Homepage/png/human.png"
function Section7() {
  return (
    <section className="section7">
        <div className="section7-container">
            <div className="section7-textbox">
                <h2 className="section7-textbox__title">Not just another HR resource.</h2>
                <p className="section7-textbox__text">Simple. Entertaining. Informative.</p>
            </div>
            <button className="section7-container__btn">Download E-book</button>
        </div>
        <img src={human} alt="human" className="section7__img" />
    </section>
  )
}

export default Section7