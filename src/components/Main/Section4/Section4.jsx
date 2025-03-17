import "./Section4.scss"
import people1 from "../../../assets/Homepage/png/people1.png"
function Section4() {
  return (
    <section className="section4">
        <div className="section4-textbox">
            <h3 className="section4-textbox__title">Employees come in all shapes and sizes. Find the right fit.</h3>
            <p className="section4-textbox__text">Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts and make sure you are compliant with work and safety boards.</p>
        </div>
        <img src={people1} alt="people1" className="section4-img" />
    </section>
  )
}

export default Section4