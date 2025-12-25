import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Ameer Hamza</span>{" "}
            from <span className="purple">Dubai, UAE</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Senior Web App Consultant</span> at{" "}
            <span className="purple">Accurasy</span>.
            <br />I hold a degree in{" "}
            <span className="purple">Software Engineering</span> from{" "}
            <span className="purple">University of Sargodha</span> (2016-2020).
            <br />
            <br />
            Software engineer with over 5+ years of experience in designing and developing scalable and high-performance web applications. Working with Next.js, Node.js, React.js, TypeScript and database management (MongoDB, MySQL, Supabase, Firebase). Strong experience with AI integrations, AI Agents, API development, and cloud-based deployments. Adept at optimizing system performance, debugging, and creating seamless user experiences with CI/CD pipelines, Agile methodologies, and modern development tools.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered Applications 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies ✨
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source 🌟
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ameer Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
