import Carousel from 'react-bootstrap/Carousel';
import './CarouselText.scss'
const CarouselText = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <div className='bg-box'></div>
                <Carousel.Caption>
                    <p className='csl-txt'>
                        Cuotas sin interés con todos los bancos
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-box'></div>
                <Carousel.Caption>
                    <p className='csl-txt'>Promociones con bancos seleccionados</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-box'></div>
                <Carousel.Caption>
                    <p className='csl-txt'>
                        Envíos a todo el país
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-box'></div>
                <Carousel.Caption>
                    <p className='csl-txt'>
                        Envío gratis en provincia de Mendoza
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselText;