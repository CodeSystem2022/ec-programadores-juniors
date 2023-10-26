import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Offcanvas from "react-bootstrap/Offcanvas";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ show, handleClose }) => {
  return (
    <Offcanvas
      className="search-sidebar"
      show={show}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Body>
        <div className="search-input-container">
          <input
            className="input-searchbar"
            type="text"
            placeholder="¿Qué estás buscando?"
          />
          <button className="close-searchbar-button" onClick={handleClose}>
            <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
          </button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchBar;
