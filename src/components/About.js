import React from "react"

function About() {
  return (
    <section className="about">
      <img src="images/queso-taco.png" alt="Yummy Taco" className="about__mockup" />
      <div className="about__details">
        <h2>Featured Taco</h2>
        <p>Slim Profile, easy to hold and loaded with cheese.</p>
        <p>This is the one you have been waiting for</p>
        <button>Learn More →</button>
      </div>
    </section>
  )
}

export default About
