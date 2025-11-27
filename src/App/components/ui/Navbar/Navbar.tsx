import React from "react";
import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as Nvb } from "react-bootstrap";

import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <Nvb bg="dark" data-bs-theme="dark">
        <Container>
          <Nvb.Brand href="#home">Navbar</Nvb.Brand>
          <Nav className="me-auto">
            <Link to={"/home"}>Home</Link>
            <Link to={"/thumbs"}>Thumbs</Link>
            <Link to={"/editor"}>Editor</Link>
          </Nav>
        </Container>
      </Nvb>
    </div>
  );
};

export default Navbar;
