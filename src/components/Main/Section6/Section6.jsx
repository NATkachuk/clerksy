import "./Section6.scss"
import rowReverse from "../../../assets/Homepage/svg/rowReverse.svg"
import row from "../../../assets/Homepage/svg/row.svg"
import price from "../../../assets/Homepage/png/price.png"

function Section6() {
  return (
    <section className="section6">
        <div className="section6-textbox">
            <h2 className="section6-textbox__title">It's easy as 1, 2, 3</h2>
            <p className="section6-textbox__text">Clerksy can help use your unique business needs. Here's how:</p>
        </div>
        <div className="section6-container">
            <div className="section6-box">
                <p className="section6-box__text1">Fill out a form and tell us what you're looking for:</p>
                <p className="section6-box__text2">5 minutes</p>
            </div>
            <img src={rowReverse} alt="rowReverse" className="section6-container__img" />
            <div className="section6-box">
                <p className="section6-box__text1">Time it will take a Clerksy rep to follow up:</p>
                <p className="section6-box__text2">24 hours</p>
            </div>
            <img src={row} alt="row" className="section6-container__img1" />
            <img src={price} alt="price" className="section6-container__img2" />
        </div>
        <button className="section6-btn">Book Free Discovery Call</button>
    </section>
  )
}

export default Section6