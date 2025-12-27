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
import presentia from "../../Assets/Projects/presentia.png";

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
          {/* Presentia AI - Flagship Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={presentia}
              isBlog={false}
              title="Presentia AI"
              isFlagship={true}
              userCount="250K+"
              description="Presentia AI is an advanced AI-powered presentation generator that transforms ideas into stunning PowerPoint presentations in seconds. With over 250,000 active users, this platform revolutionizes how professionals create presentations. Users can generate comprehensive presentations from text, PDF, DOCX, or TXT files. The platform features AI-generated images, multilingual support, customizable themes, and seamless file processing. Built with cutting-edge AI technology, it saves hours of work while delivering professional-quality results. Perfect for business pitches, academic presentations, and content creation."
              technologies={["React", "Next.js", "AI/ML", "TypeScript", "Node.js", "Cloud Storage", "File Processing"]}
              demoLink="https://www.presentia.ai/"
            />
          </Col>

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
