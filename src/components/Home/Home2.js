import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Software Engineer with over 5+ years of experience in designing and developing scalable and high-performance web applications. I specialize in working with Next.js, Node.js, React.js, TypeScript, and database management (MongoDB, MySQL, Supabase, Firebase).
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, Next.js, React.js, and Node.js{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks with strong experience in AI integrations, AI Agents, and API development.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, AI-powered Solutions,{" "}
                </b>
              </i>
              and cloud-based deployments with CI/CD pipelines and modern development tools.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Next.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Node.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
