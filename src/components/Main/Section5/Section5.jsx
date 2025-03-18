import "./Section5.scss"
import laptopMan from "../../../assets/Homepage/png/laptopMan.png"
import shieldMini from "../../../assets/Homepage/svg/shieldMini.svg"
import star from "../../../assets/Homepage/svg/star.svg"
import search from "../../../assets/Homepage/svg/search.svg"
function Section5() {
  return (
    <section className="section5">
        <div className="section5-container1">
            <div className="section5-textbox">
                <h2 className="section5-textbox__text1">How the scenes fit together</h2>
                <p className="section5-textbox__text2">Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
            </div>
            <img src={laptopMan} alt="" className="section5-container__img" />
        </div>
        <div className="section5-container2">
          <div className="section5-textbox">
            <p className="section5-textbox__text1">Consider everyone's best interest</p>
            <p className="section5-textbox__text2">HR is for everyone. Clerksy can help you.</p>
          </div>
          <div className="section5-cont">
            <div className="section5-box">
              <img src={shieldMini} alt="shieldMini" className="section5-box__img" />
              <p className="section5-box__text">Protect Your Company</p>
              <ul className="section5-box__list">
                <li className="section5-box__list-item">Compliance Audits & Training</li>
                <li className="section5-box__list-item">Employee Data Storage</li>
                <li className="section5-box__list-item">Policy Drafting</li>
              </ul>
            </div>
            <div className="section5-box">
              <img src={star} alt="star" className="section5-box__img" />
              <p className="section5-box__text">Set Your Employees Up For Success</p>
              <ul className="section5-box__list">
                <li className="section5-box__list-item">Learning & Development</li>
                <li className="section5-box__list-item">Employee Relations</li>
                <li className="section5-box__list-item">Benefit Management</li>
                <li className="section5-box__list-item">Employee Performance</li>
              </ul>
            </div>
            <div className="section5-box">
              <img src={search} alt="search" className="section5-box__img" />
              <p className="section5-box__text">Know Your Industry's Legal Landscape</p>
              <ul className="section5-box__list">
                <li className="section5-box__list-item">Work Place Investigations</li>
                <li className="section5-box__list-item">Employee Mediations</li>
                <li className="section5-box__list-item">Performance Tracking</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Section5