import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {

    return (
        <div className='nav-container'>
            <Navbar key='lg' expand='lg' className="navbar">
                <Container fluid>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="start"
                    >
                        <Offcanvas.Header className='off-header' closeButton>
                            <Offcanvas.Title className='off-title' id={`offcanvasNavbarLabel-expand-lg`}>
                                <img className='img-logo'
                                    src="./logo/sportblend.png"
                                    alt="logo"
                                />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Link</Nav.Link>
                                <NavDropdown
                                    title="Dropdown"
                                    id={`offcanvasNavbarDropdown-expand-lg`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            <Navbar.Brand className='navbar-brand' href="./">
                <img className='img-logo'
                    src="./logo/sportblend.png"
                    alt="logo"
                />
            </Navbar.Brand>
            <div className='icons-container'>
                <FontAwesomeIcon className='nav-icon' icon={faCartShopping} />
                <FontAwesomeIcon className='nav-icon' icon={faMagnifyingGlass} />
            </div>

        </div>
    )
}

export default NavbarComponent