import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/users/userAction";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import SearchBar from "./Searchbar/Searchbar";
import Cart from "./Cart/Cart";

const NavbarComponent = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearchBar = () => {
    setShowSearchBar(false);
  };
  const handleCartIconClick = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const isUserLoggedIn = localStorage.getItem("user");

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
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="chevron-icon"
                      />
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
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="chevron-icon"
                      />
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
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="chevron-icon"
                      />
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
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="chevron-icon"
                      />
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
                {isUserLoggedIn ? (
                  <>
                    <Nav.Link className="nav-link" href="/account">
                      Mi Cuenta
                    </Nav.Link>
                    <Nav.Link className="nav-link" onClick={handleLogout}>
                      Salir
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link className="nav-link" href="/login">
                      Iniciar Sesión
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="/register">
                      Registrarse
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Navbar.Brand className="navbar-brand" href="./">
        <img className="img-logo" src="./logo/sportblend-logo.png" alt="logo" />
      </Navbar.Brand>
      <div className="icons-container">
        <Link onClick={handleCartIconClick}>
          <FontAwesomeIcon className="nav-icon" icon={faCartShopping} />
        </Link>
        <Link onClick={handleSearchIconClick}>
          <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
        </Link>
      </div>

      <SearchBar show={showSearchBar} handleClose={handleCloseSearchBar} />
      <Cart show={showCart} handleClose={handleCloseCart} />
    </div>
  );
};

export default NavbarComponent;
