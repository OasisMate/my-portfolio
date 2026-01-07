import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineClose,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky capsule-navbar" : "navbar capsule-navbar"}
    >
      <Container className="d-flex justify-content-center">
        <div className={`capsule-container ${expand ? 'menu-expanded' : ''}`}>
          <Navbar.Brand href="/" className="d-flex logo-brand">
            <span 
              className="logo-text" 
              style={{ 
                fontSize: "2rem", 
                fontWeight: "normal",
                color: "#00D4FF",
                fontFamily: "'Dancing Script', 'Great Vibes', cursive",
                fontStyle: "italic",
                letterSpacing: "2px",
                textShadow: "0 0 20px rgba(0, 212, 255, 0.6), 2px 2px 4px rgba(0, 0, 0, 0.3)",
                lineHeight: "1"
              }}
            >
              AH.
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
            className="capsule-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="capsule-nav" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                className={isActive("/") ? "active-nav-link" : ""}
              >
                <AiOutlineHome style={{ marginBottom: "2px", fontSize: "1.4em" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className={isActive("/about") ? "active-nav-link" : ""}
              >
                <AiOutlineUser style={{ marginBottom: "2px", fontSize: "1.4em" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className={isActive("/project") ? "active-nav-link" : ""}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px", fontSize: "1.4em" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className={isActive("/resume") ? "active-nav-link" : ""}
              >
                <CgFileDocument style={{ marginBottom: "2px", fontSize: "1.4em" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/OasisMate/my-portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.4em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.4em" }} />
              </Button>
            </Nav.Item>
            
            {/* Close button for mobile wheel menu */}
            {expand && (
              <div className="wheel-close-item">
                <button 
                  className="close-btn"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineClose style={{ fontSize: "1.2em" }} /> Close
                </button>
              </div>
            )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
