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
import groundsync from "../../Assets/Projects/groundsync.png";
import kidsgo from "../../Assets/Projects/kidsgo.png";

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
          {/* Kidsgo - Flagship Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kidsgo}
              isBlog={false}
              title="Kidsgo"
              isFlagship={true}
              userCount="10K/day"
              description="Kidsgo is a high-traffic kids-courses platform where I built Europe's first AI-driven advertisement engine and a custom RAG chatbot for real-time course and parenting queries. This intelligent system significantly improved search relevance and monetization on a platform serving 10,000 daily visitors."
              technologies={["RAG", "AI/ML", "Chatbot", "Advertisement Engine", "CMS Integration", "Vector Search", "Embeddings"]}
              demoLink="https://www.kidsgo.de/"
            />
          </Col>

          {/* Presentia AI - Flagship Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={presentia}
              isBlog={false}
              title="Presentia AI"
              isFlagship={true}
              userCount="250K+"
              description="Presentia AI is an advanced AI-powered presentation generator that transforms ideas into stunning PowerPoint presentations in seconds. With over 250,000 active users, this platform revolutionizes how professionals create presentations."
              technologies={["React", "Next.js", "AI/ML", "TypeScript", "Node.js", "Cloud Storage", "File Processing"]}
              demoLink="https://www.presentia.ai/"
            />
          </Col>

          {/* GroundSync - Flagship Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groundsync}
              isBlog={false}
              title="GroundSync"
              isFlagship={true}
              description="GroundSync is a powerful synchronization platform that streamlines data management and coordination across multiple systems. This innovative solution enhances productivity and ensures seamless integration for modern workflows."
              technologies={["React", "Node.js", "TypeScript", "Database", "API Integration", "Real-time Sync"]}
              demoLink="https://groundsync.io/#/"
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
