import "./Section3.scss"
import inform from "../../../assets/Homepage/svg/inform.svg"
import shield from "../../../assets/Homepage/svg/shield.svg"
import documents from "../../../assets/Homepage/svg/documents.svg"
import head from "../../../assets/Homepage/svg/head.svg"
function Section3() {
  return (
    <section className="section3">
        <h2 className="section3-title">HR Production of the Highest Quality</h2>
        <div className="section3-container">
            <div className="section3-box">
                <img src={inform} alt="inform" className="section3-box__img" />
                <p className="section3-box__text">Educates & Informs</p>
                <p className="section3-box__text1">Employee Expectations</p>
            </div>
            <div className="section3-box">
                <img src={shield} alt="shield" className="section3-box__img" />
                <p className="section3-box__text">Protects Your Business</p>
                <p className="section3-box__text1">Just in Case</p>
            </div>
            <div className="section3-box">
                <img src={documents} alt="documents" className="section3-box__img" />
                <p className="section3-box__text">Manages & Stores</p>
                <p className="section3-box__text1">Important Documents</p>
            </div>
            <div className="section3-box">
                <img src={head} alt="head" className="section3-box__img" />
                <p className="section3-box__text">Create a Healthy</p>
                <p className="section3-box__text1">Work Environment</p>
            </div>
        </div>
    </section>
  )
}

export default Section3