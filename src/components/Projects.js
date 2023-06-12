import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";
import particleFountainVideo from "./triangle.mp4";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Fantasy Survival": {
        title: "fantasy survival",
        desc:
          "A third-person monster survival-mode game where you shoot down a continious wave of monsters.",
        techStack: "C# | Unity",
        link: "https://github.com/topmansam/Fantasy-Survival",
         open: "",
        image: "/assets/newFantasy.png"
      },
      museum: {
        title: "2D Triangulation",
        desc:
          "A 2D triangulation algorithm generates a set of unique points and uses them to create triangles that cover the entire 2D space.",
        techStack: "C++ | OpenGL/GLUT",
        link: "https://github.com/topmansam/2D-Triangulation",
        // open: "https://gazijarin.github.io/Truth/",
        image: "/assets/200.png"
      },
      "Zombie Runnner": {
        title: "zombie runner",
        desc:
          "Engaging endless runner game called Zombie Runner for iOS, inspired by popular titles like Temple Run and Subway Surfers.",
        techStack: "C++ | Unreal Engine",
        // link: "https://github.com/gazijarin/TallTales",
         open: "https://apps.apple.com/ca/app/zombie-runner/id1645628526",
        image: "/assets/2.png"
      },
      "Particle Fountain": {
        title: "3D particle fountain",
        desc: "Visually appealing 3D particle system with various effects and interactions.",
        techStack: "C++ | OpenGL/GLUT",
        link: "https://github.com/topmansam/3D-Particle-Fountain",
        video: particleFountainVideo
      },
    };
    const projects = {
      "Dijkstra's algorithm": {
        desc:
          "The Shortest Path Between Cities program is an implementation of Dijkstra's algorithm to find the shortest path between two cities in a transportation network.",
        techStack: "Java",
        link: "https://github.com/topmansam/Dijkstras_algorithm",
        // open: "https://tdsb-app.herokuapp.com/"
      },
      "Conways Game of Life": {
        desc:
          "A simulation of Conway's Game of Life, a well-known cellular automaton experiment.",
        techStack: "Java",
        link: "https://github.com/topmansam/conway",
        // open: "https://gazijarin.github.io/AdamAI/"
      },
      "Museum tour app": {
        desc:
          "360 panoramic interactive system for Brock University and Niagara-on-the-Lake Museum.",
        techStack: "Node.js | React | Spring Boot | Java | SQL",
        link:
          "https://github.com/dv18uj/COSC-4P02"
      },
      // "Odin Bot": {
      //   desc:
      //     "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
      //   techStack: "Javascript, Node.js, Natural NLP, Telegram API",
      //   link: "https://github.com/gazijarin/OdinBot",
      //   open: ""
      // },
      // "Game Centre": {
      //   desc:
      //     "An Android app consisting of three board games, including multiplayer, autosave, user authentication, etc.",
      //   techStack: "Java, Android Studio",
      //   link: "https://github.com/gazijarin/gamecentre",
      //   open: ""
      // },
      // "Minimax Stonehenge": {
      //   desc:
      //     "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
      //   techStack: "Python",
      //   link: "https://github.com/gazijarin/stonehenge",
      //   open: ""
      // }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
        <Carousel.Item>
        {spotlightProjects[key]["video"] ? (
          <video className="d-block w-100" src={spotlightProjects[key]["video"]} autoPlay loop muted />
        ) : (
          <img
            className="d-block w-100"
            src={spotlightProjects[key]["image"]}
            alt={key}
          />
        )}
        <div className="caption-bg">
          <Carousel.Caption>
            <h3>{spotlightProjects[key]["title"]}</h3>
            <p>
              {spotlightProjects[key]["desc"]}
              <p className="techStack">
                {spotlightProjects[key]["techStack"]}
              </p>
            </p>
            <ExternalLinks
              githubLink={spotlightProjects[key]["link"]}
              openLink={spotlightProjects[key]["open"]}
            ></ExternalLinks>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
