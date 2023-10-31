import { connect } from 'react-redux';
import FullWidthLayout from "../../layouts/FullWidthLayout";
import CardProduct from '../../components/CardProduct/CardProduct';
import Options from '../../components/Options/Options';

const Products = ({ products }) => {
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

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(Products);