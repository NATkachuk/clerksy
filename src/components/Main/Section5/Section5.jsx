import "./Section5.scss"
import laptopMan from "../../../assets/Homepage/png/laptopMan.png"

function Section5() {
  return (
    <section className="section5">
        <div className="section5-container1">
            <div className="section5-textbox">
                <p className="section5-textbox__text1">How the scenes fit together</p>
                <p className="section5-textbox__text2">Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
            </div>
            <img src={laptopMan} alt="" className="section5-container__img" />
        </div>
        <div className="section5-container2"></div>
    </section>
  )
}

export default Section5