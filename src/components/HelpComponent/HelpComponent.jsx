import './HelpComponent.scss';
import Question from '../Question/Question';

function HelpComponent() {



    return (
        <>
            <h1 className='help-h1'>OBTENER AYUDA</h1>
            <div className="help-container">
                <div className='help-box'>
                    <h3 className='help-title'>ENVIO Y ENTREGAS</h3>
                    <Question
                        question='¿Cuáles son las opciones de entrega de Sportblend?'
                        answer='Las opciones de entrega de Sportblend son 2, a la sucursal de la empresa con la cual trabajamos o a su domicilio.'
                    />
                </div>

                <div className='help-box'>
                    <h3 className='help-title'>DEVOLUCIONES</h3>
                    <Question
                        question='¿Cuál es la política de Sportblend sobre las devoluciones?'
                        answer='Para devoluciones, contáctanos dentro de los 30 días posteriores a la compra para obtener un reembolso o cambio.'
                    />

                    <Question
                        question='Exepciones'
                        answer='Algunos productos pueden tener restricciones de devolución. Consulta nuestra política para más detalles.'
                    />

                    <Question
                        question='¿Cuándo veré mi reintegro?'
                        answer='El reembolso se procesará en un plazo de 5-7 días hábiles después de recibir el producto devuelto.'
                    />
                </div>

                <div className='help-box'>
                    <h3 className='help-title'>PEDIDOS</h3>
                    <Question
                        question='¿Qué métodos de pago utiliza Sportblend?'
                        answer='Aceptamos tarjetas de crédito, débito a traves de Mercadopago para pagos seguros y convenientes.'
                    />

                    <Question
                        question='Seguimiento de mi pedido'
                        answer='Puedes hacer seguimiento de tu pedido en tiempo real a través de nuestra página web con tu número de seguimiento.'
                    />

                    <Question
                        question='¿Puedo cancelar o cambiar mi pedido?'
                        answer='Si tu pedido aún no ha sido procesado, podemos ayudarte a cancelarlo o hacer cambios. Ponte en contacto con nosotros.'
                    />
                </div>

                <div className='help-box'>
                    <h3 className='help-title'>INFORMACION DEL PRODUCTO</h3>
                    <Question
                        question='¿Los productos de Sportblend tienen garantía?'
                        answer='Sí, ofrecemos garantía para nuestros productos. Consulta la página de garantía para obtener más información.'
                    />
                    <Question
                        question='¿Cómo encuentro el talle adecuado?'
                        answer='Utiliza nuestra guía de tallas en la descripción del producto para encontrar tu talla ideal.'
                    />
                    <Question
                        question='Información sobre los productos'
                        answer='Encuentra detalles completos sobre nuestros productos, incluyendo materiales, características y cuidados en la descripción del producto.'
                    />
                </div>
            </div>
        </>
    )
}

export default HelpComponent;