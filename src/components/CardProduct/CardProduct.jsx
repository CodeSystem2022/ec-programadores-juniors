import React from 'react';
import { Link } from 'react-router-dom';
import './CardProduct.scss';

const CardProduct = ({ id, name, price, img }) => {

  

    return (

        <div className='card-div col-4 '>
            <Link className='simprod-link' to={`/product/${id}`}>
                <img className='card-img' src={img} alt="prod-img" />
            </Link>
            <h4 className='card-title'>{name}</h4>
            <p className='card-price'>$ {price}</p>
        </div>

    )
}

export default CardProduct