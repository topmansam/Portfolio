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
         <a href="https://www.ox.ac.uk/about"> Brock University. </a>
        My expected graduation date is June 2024. <b> I am pursing software development
        internships, and new graduate oppurtunites.</b>
      </p>
    );
    // const two = (
    //   <p>
    //     Outside of work, I'm interested developing games. Check out my gaming website!
    //     <a href="https://goldmetalgames.com/"> Gold Metal Games. </a>
    //   </p>
    // );
  
 

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
              {/* {[two]} */}
            </div>
            <div className="about-image">
              <img src={"/assets/sam_face.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
