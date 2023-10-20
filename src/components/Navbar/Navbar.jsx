import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearchBar = () => {
    setShowSearchBar(false);
  };

  return (
    <div className="nav-container">
      <Navbar.Brand className="navbar-brand-laptop" href="./">
        <img className="img-logo" src="./logo/sportblend-logo.png" alt="logo" />
      </Navbar.Brand>
      <Navbar key="lg" expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Header className="off-header" closeButton>
              <Offcanvas.Title
                className="off-title"
                id={`offcanvasNavbarLabel-expand-lg`}
              >
                <img
                  className="img-logo"
                  src="./logo/sportblend-logo.png"
                  alt="logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <NavDropdown
                  className="dropdown-tg"
                  title={
                    <div className=" d-flex justify-content-between align-items-center">
                      <p className="nav-text">Destacados</p>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  }
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item className="navDropdown" href="#action3">
                    Calzado
                  </NavDropdown.Item>
                  <NavDropdown.Item className="navDropdown" href="#action4">
                    Indumentaria
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="view-all navDropdown"
                    href="#action5"
                  >
                    Ver Todo
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="nav-text">Mujer</p>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  }
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="#action3" className="navDropdown">
                    Calzado
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="navDropdown">
                    Indumentaria
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="view-all navDropdown"
                    href="#action5"
                  >
                    Ver Todo
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="nav-text">Hombre</p>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  }
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item className="navDropdown" href="#action3">
                    Calzado
                  </NavDropdown.Item>
                  <NavDropdown.Item className="navDropdown" href="#action4">
                    Indumentaria
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="view-all navDropdown"
                    href="#action5"
                  >
                    Ver Todo
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="nav-text">Niño/a</p>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                  }
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item className="navDropdown" href="#action3">
                    Calzado
                  </NavDropdown.Item>
                  <NavDropdown.Item className="navDropdown" href="#action4">
                    Indumentaria
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="view-all navDropdown"
                    href="#action5"
                  >
                    Ver Todo
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-link" href="#action1">
                  Accesorios
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  Mi Cuenta
                </Nav.Link>
                <Nav.Link className="nav-link" href="#action2">
                  Salir
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Navbar.Brand className="navbar-brand" href="./">
        <img className="img-logo" src="./logo/sportblend-logo.png" alt="logo" />
      </Navbar.Brand>
      <div className="icons-container">
        <Link>
          <FontAwesomeIcon className="nav-icon" icon={faCartShopping} />
        </Link>
        <Link onClick={handleSearchIconClick}>
          <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
        </Link>
      </div>

      <Offcanvas
        show={showSearchBar}
        onHide={handleCloseSearchBar}
        placement="end"
        style={{
          height: "100px",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Offcanvas.Body>
          <div className="search-input-container">
            <input
              className="input-searchbar"
              type="text"
              placeholder="¿Qué estás buscando?"
            />
            <button
              className="close-searchbar-button"
              onClick={handleCloseSearchBar}
            >
              X
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavbarComponent;
