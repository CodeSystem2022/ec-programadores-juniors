import React from "react";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./Account.scss";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <FullWidthLayout>
      <div className="account-container">
        <h1>Mi Cuenta</h1>
        {user && (
          <div className="user-container">
            {" "}
            <p>
              <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
              {user.first_name} {user.last_name}
            </p>
            <p>
              <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
              Email: {user.email}
            </p>
            <p>
              <FontAwesomeIcon className="nav-icon" icon={faMagnifyingGlass} />
              Dirección:{" "}
            </p>
          </div>
        )}
      </div>
    </FullWidthLayout>
  );
};

export default Account;
