import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project 1"
              description="Add your project description here. Describe what technologies you used, key features, and what problem it solves."
              ghLink="https://github.com/OasisMate/PROJECT_1"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project 2"
              description="Add your project description here. Describe what technologies you used, key features, and what problem it solves."
              ghLink="https://github.com/OasisMate/PROJECT_2"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project 3"
              description="Add your project description here. Describe what technologies you used, key features, and what problem it solves."
              ghLink="https://github.com/OasisMate/PROJECT_3"
              demoLink="https://your-demo-link.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Project 4"
              description="Add your project description here. Describe what technologies you used, key features, and what problem it solves."
              ghLink="https://github.com/OasisMate/PROJECT_4"
              demoLink="https://your-demo-link.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Project 5"
              description="Add your project description here. Describe what technologies you used, key features, and what problem it solves."
              ghLink="https://github.com/OasisMate/PROJECT_5"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Project 6"
              description="Add your project description here. Describe what technologies you used, key features, and what problem it solves."
              ghLink="https://github.com/OasisMate/PROJECT_6"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
