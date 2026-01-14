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
      <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', flexShrink: 0 }}>
        {props.isFlagship && (
          <Badge 
            bg="warning" 
            style={{ 
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10,
              padding: '5px 10px', 
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <AiFillStar /> Flagship
          </Badge>
        )}
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            objectPosition: 'center'
          }} 
        />
      </div>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Card.Title style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
          {props.title}
          {props.userCount && (
            <Badge bg="info" style={{ fontSize: '0.7rem' }}>
              {props.userCount} Users
            </Badge>
          )}
        </Card.Title>
        <Card.Text style={{ 
          textAlign: "justify", 
          minHeight: '100px',
          marginBottom: '15px',
          flexShrink: 0
        }}>
          {props.description}
        </Card.Text>
        {props.technologies && (
          <div style={{ 
            marginBottom: '15px', 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '5px',
            minHeight: '40px',
            flexShrink: 0
          }}>
            {props.technologies.map((tech, idx) => (
              <Badge key={idx} bg="secondary" style={{ fontSize: '0.65rem', padding: '3px 8px' }}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
        <div style={{ marginTop: 'auto', flexShrink: 0 }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: props.ghLink ? "10px" : "0" }}
            >
              <CgWebsite /> &nbsp;
              {"Live Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
