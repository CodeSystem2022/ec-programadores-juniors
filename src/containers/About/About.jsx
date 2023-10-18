import React from 'react'
import FullWidthLayout from "../../layouts/FullWidthLayout";
import './About.scss';
function About() {
    return (
        <>
            <FullWidthLayout>
                <h1 className='help-h1 text-center'>
                    ACERCA DE SPORTBLEND
                </h1>

                <div className='mx-2'>
                    <p className='txt'>En Sport Blend, fusionamos nuestra pasión por el deporte y la moda para ofrecerte una experiencia única en la compra de ropa deportiva moderna. </p>
                    <div className='d-flex justify-content-center about-cont'>
                        <div className='img-div'>
                            <img className='about-img' src="./logo/logo.png" alt="runman" />
                            <div className='d-flex justify-content-around sqs-div'>
                                <div className='first-sq'>
                                    <p className='text-p'>Sportblend: donde la moda deportiva y casual se encuentran en armonía.</p>
                                </div>
                                <div className='second-sq'>
                                    <p className='text-p'>Exploramos la simplicidad en el estilo de vida activo, ofreciendo productos de calidad. </p>
                                </div>
                                <div className='third-sq'>
                                    <p className='text-p'> Todas tus marcas favoritas como Nike y Adidas. Únete a nosotros para experimentar la fusión perfecta entre lo deportivo y lo casual. </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='text-div'>
                            <p className='text-p'>Sportblend: donde la moda deportiva y casual se encuentran en armonía. Exploramos la simplicidad en el estilo de vida activo, ofreciendo productos de calidad de tus marcas favoritas como Nike y Adidas. Únete a nosotros para experimentar la fusión perfecta entre lo deportivo y lo casual. </p>
                        </div> */}
                    </div>
                </div>

            </FullWidthLayout>

        </>
    )
}

export default About