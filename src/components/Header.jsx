import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = ({ onSearch }) => { // Recebe a prop onSearch
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CoinGecko</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="/documentacao-projeto.pdf" download>Documentação do projeto</Nav.Link>
            <NavDropdown title="Destaques" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bitcoin</NavDropdown.Item>
              <NavDropdown.Item href="/ethereum">Ethereum</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


