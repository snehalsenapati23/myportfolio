import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/techy.png";
import projImg2 from "../assets/img/videomania.png";
import projImg3 from "../assets/img/pinnacle.png";
import projImg4 from "../assets/img/sahinotes.png";
import projImg5 from "../assets/img/realstate.png";
import projImg6 from "../assets/img/Screenshot 2023-07-08 171410.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "TechyMoon",
      description: "Digital Service Provider",
      imgUrl: projImg1,
      link: "https://one-green.vercel.app/",
      git: "https://github.com/snehalsenapati23/React-project-one-TechyMoon",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://react-video-mania.vercel.app/",
      git: "https://github.com/snehalsenapati23/video-mania",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://snehal-real-state.vercel.app/",
      git: "https://github.com/snehalsenapati23/RealState-HomZy",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
      link: "/",
      git: "/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://sahilnotes.vercel.app/",
      git: "https://github.com/snehalsenapati23/SahiNotes",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://pinacle.vercel.app/",
      git: "https://github.com/snehalsenapati23/paniclsSubmission",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                  Take a look at my Projects:


                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
