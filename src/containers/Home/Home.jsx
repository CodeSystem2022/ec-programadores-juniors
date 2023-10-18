import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import "./Home.scss";

const Home = () => {
  return (
    <FullWidthLayout>
      <img className="home-img" src="./img/home-img.jpg" alt="main-image" />
      <h1 className="home-h1 text-start">LO MEJOR DEL <br /> DEPORTE</h1>
      <section>
        <ProductsCarousel />
      </section>

      <section>
        <img className="home-img" src="./img/image2.jpeg" alt="home-image 2" />
      </section>

    </FullWidthLayout>
  )

};

export default Home;
