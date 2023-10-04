import { Link } from 'react-router-dom';
import './Footer.scss';
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className='footer d-flex flex-column justify-content-start'>
            <div className='footer-menu d-flex flex-column'>
                <Link to="/help" className='footer-link'>AYUDA</Link>
                <Link to="/about-us" className='footer-link'>ACERCA DE SPORTBLEND</Link>
                <Link to="/contact" className='footer-link'>CONTACTO</Link>
            </div>

            <div className='footer-icons-cont d-flex justify-content-space-around'>
                <Link to="/" target='_blank'>
                    <FontAwesomeIcon className='footer-icons' icon={faSquareFacebook} />
                </Link>
                <Link to="/" target='_blank'>
                    <FontAwesomeIcon className='footer-icons' icon={faSquareInstagram} />
                </Link>
                <Link to="/" target='_blank'>
                    <FontAwesomeIcon className='footer-icons' icon={faSquareXTwitter} />
                </Link>
            </div>

            <p className='copyright'>
                ▼  Argentina
                <br />
                <br />

                © 2023 SportBlend - MIT License
            </p>

        </div>
    )
}

export default Footer