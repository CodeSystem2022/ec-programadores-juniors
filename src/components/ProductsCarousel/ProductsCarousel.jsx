import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SimpleProduct from '../SimpleProductComp/SimpleProduct';
import './ProductsCarousel.scss';
import Axios from 'axios';

const ProductsCarousel = () => {

    const [products, setProducts] = useState([])

    Axios.get(`${import.meta.env.VITE_APP_HOST}/product/get-products`).then(response => {
        // console.log(response.data.products)
        setProducts(response.data.products);
    })

    return (
        <Carousel>
            {products.map((product, index) => (
                <Carousel.Item key={index}>
                    <div className='simprod-box'></div>
                    <Carousel.Caption>
                        <SimpleProduct name={product.name} price={product.price} img={product.img} />
                    </Carousel.Caption>
                </Carousel.Item>
            ))
            }
        </Carousel>
    );
}


export default ProductsCarousel;

