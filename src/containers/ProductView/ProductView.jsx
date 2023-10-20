import FullWidthLayout from "../../layouts/FullWidthLayout";
import './ProductView.scss';



const ProductView = () => {

    const product = {
        id: 1,
        name: "Zapatilla Saucony Axon 3",
        price: 70000,
        img: './img/prod-test.jpg',
        sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5],
        description: 'Zapatillas de Running hombre, están re chetas, compralas'
    };


    const sizes = product.sizes;

    return (
        <FullWidthLayout>
            <div className="product-container">
                <img className="product-img" src={product.img} alt="product" />
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">$ {product.price}</p>
                <p className="size-title">Seleccionar talle(US)</p>
                <div className="size">

                    {sizes.map((size, index) => (
                        <button className="size-button" key={index}>{size}</button>
                    ))}
                </div>
                <button className="add-button">Agregar al carrito</button>

                <h5>Descripción</h5>
                <p>{product.description}</p>

            </div>
        </FullWidthLayout>
    )

};


export default ProductView;