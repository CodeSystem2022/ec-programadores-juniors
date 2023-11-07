import { useState } from 'react'
import Axios from 'axios';
import FullWidthLayout from "../../layouts/FullWidthLayout";
import CardProduct from '../../components/CardProduct/CardProduct';
import Options from '../../components/Options/Options';

const Products = () => {
  const [products, setProducts] = useState([])

  Axios.get(`${import.meta.env.VITE_APP_HOST}/product/get-products`).then(response => {
    // console.log(response.data.products)
    setProducts(response.data.products);
  }).catch(e => {
    console.log(e);
  })

  return (
    <FullWidthLayout>
      <Options />
      <div className='container'>
        <div className='row'>
          {products.map((product, index) => (
            <CardProduct key={index} id={product.id} name={product.name} price={product.price} img={product.img} />
          ))}
        </div>
      </div>
    </FullWidthLayout>
  )
}



export default Products;