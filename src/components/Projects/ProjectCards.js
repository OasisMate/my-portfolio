import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className={`project-card-view ${props.isFlagship ? 'flagship-project' : ''}`}>
      {props.isFlagship && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10 }}>
          <Badge bg="warning" style={{ 
            padding: '5px 10px', 
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <AiFillStar /> Flagship
          </Badge>
        </div>
      )}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {props.title}
          {props.userCount && (
            <Badge bg="info" style={{ fontSize: '0.7rem' }}>
              {props.userCount} Users
            </Badge>
          )}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.technologies && (
          <div style={{ marginBottom: '15px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {props.technologies.map((tech, idx) => (
              <Badge key={idx} bg="secondary" style={{ fontSize: '0.65rem', padding: '3px 8px' }}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
