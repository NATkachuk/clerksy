import "./Section9.scss"

function Section9() {
  return (
    <section className="section9">
        <div className="section9-textbox">
            <h2 className="section9-textbox__title">Stay up to date!</h2>
            <p className="section9-textbox__text">Sign up for the latest Clerksy news.</p>
        </div>
        <div className="section9-box">
            <label className="section9-box__label">
                <input type="email" placeholder="Email Address" className="section9-box__label-input" />
                <button className="section9-box__label-btn">Sign Up</button>
            </label>
            <p className="section9-box__text">By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full <span className="section9-box__text-span">Privacy Policy</span></p>
        </div>
    </section>
  )
}

export default Section9