import FullWidthLayout from "../../layouts/FullWidthLayout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceDizzy } from "@fortawesome/free-solid-svg-icons"
import './Error404.scss';
import { Link } from "react-router-dom";

function Error404() {
  return (
    <FullWidthLayout>
      <div className="e-container">
        <h1 className="e-title">
          4
          <span>
            <FontAwesomeIcon className="mx-4 e-icon" icon={faFaceDizzy} />
          </span>4</h1>
        <h2 className="e-h2">UPS, NO SE ENCUENTRA LO QUE BUSCABAS</h2>
        <p className="e-text">¡Será mejor que corras al inicio!</p>
        <img className="e-img" src="/logo/logo.png" alt="runman" />
        <Link className="back-home" to='/'> Volver </Link>
      </div>





    </FullWidthLayout>
  )
}

export default Error404