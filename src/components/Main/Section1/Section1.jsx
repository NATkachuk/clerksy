import './Section1.scss'
import people from "../../../assets/Homepage/png/people.png"

function Section1() {
  return (
    <section className="section1">
        <div className="section1-container">
            <h1 className="section1-container__title">Running the show has never been so easy.</h1>
            <p className="section1-container__text">Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.</p>
        </div>
        <img src={people} alt="people" className="section1-img" />
    </section>
  )
}

export default Section1