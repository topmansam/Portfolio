import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently in my last year of my 4 year computer science degree at
         <a href="https://brocku.ca/"> Brock University. </a>
        My expected graduation date is June 2024. <b> I am pursing Software Engineering
        New Grad Opportunities, and I am also open to Internships!.</b>
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in playing chess, going to the gym, and playing video games!.
      </p>
    );
  
 

    const tech_stack = [
      "C++",
      "C#",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];
 

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/IMG_2759.jpg"}/>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
