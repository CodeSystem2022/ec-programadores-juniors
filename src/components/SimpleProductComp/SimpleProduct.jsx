import { Link } from 'react-router-dom';
import './SimpleProduct.scss'
const SimpleProduct = ({ name, price, img }) => {

    return (
        <div className='simprod-div'>
            <Link className='simprod-link' to={"/"}>
                <img className='simprod-img' src={img} alt="prod-img" />
            </Link>
            <h4 className='simprod-title'>{name}</h4>
            <p className='simprod-price'>$ {price}</p>
        </div>
    )
}

export default SimpleProduct;