import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div className="footer-content">
        <div className="footer-bottom">
          <div className="footer-text">
            <p className="footer-designer">
              Designed & Developed by <span className="footer-name">Ameer Hamza</span>
            </p>
            <p className="footer-copyright">
              © {year} <span className="footer-initials">AH</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
