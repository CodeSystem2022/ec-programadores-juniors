import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import SimpleProduct from '../SimpleProductComp/SimpleProduct';
import './ProductsCarousel.scss';

const ProductsCarousel = ({ products }) => {
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

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
};

export default connect(mapStateToProps)(ProductsCarousel);

