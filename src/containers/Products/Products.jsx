import React from 'react'
import { connect } from 'react-redux';
import FullWidthLayout from "../../layouts/FullWidthLayout";
import CardProduct from '../../components/CardProduct/CardProduct';
import Options from '../../components/Options/Options';

const Products = () => {
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