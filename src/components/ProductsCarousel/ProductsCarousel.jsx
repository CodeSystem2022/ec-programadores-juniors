
import Carousel from 'react-bootstrap/Carousel';
import SimpleProduct from '../SimpleProductComp/SimpleProduct';
import './ProductsCarousel.scss';

const ProductsCarousel = () => {
    const products = [
        {
            id: 1,
            name: "Zapatilla Saucony Axon 3",
            price: 70000,
            img: './img/prod-test.jpg'
        },
        {
            id: 2,
            name: "Zapatilla Saucony Axon 3",
            price: 80000,
            img: './img/prod-test2.jpg'
        },
        {
            id: 3,
            name: "Zapatilla Saucony Axon 3",
            price: 90000,
            img: './img/prod-test.jpg'
        }
    ]
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

