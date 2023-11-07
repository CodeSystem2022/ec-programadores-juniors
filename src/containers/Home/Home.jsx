import ProductsCarousel from "../../components/ProductsCarousel/ProductsCarousel";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import { Link } from "react-router-dom";
import "./Home.scss";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const [toastDisplayed, setToastDisplayed] = useState(false);

  useEffect(() => {
    if (query.get("success") && !toastDisplayed) {
      toast.success("Producto comprado exitosamente");
      setToastDisplayed(true);
    }

    if (query.get("canceled") && !toastDisplayed) {
      toast.error("No se pudo comprar el producto");
      setToastDisplayed(true); 
    }
  }, [query, toastDisplayed]);

  return (
    <FullWidthLayout>
      <section className="first-section">
        <img className="home-img" src="./img/home-img.jpg" alt="main-image" />
        <h1 className="home-h1 text-start">
          LO MEJOR DEL <br /> DEPORTE
        </h1>
        <ProductsCarousel />
      </section>

      <section className="second-section">
        <img className="home-img" src="./img/image2.jpeg" alt="home-image 2" />
        <h2 className="home-h2 text-start">
          MODA <br /> SPORTBLEND
        </h2>
        <p className="section-text">Lo mejordel calzado e indumentaria</p>

        <ProductsCarousel />
      </section>

      <section className="genders-section">
        <div className="gender-div">
          <h4 className="gender-title">Mujer</h4>
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <img className="gender-img" src="./img/women.jpeg" alt="mujer" />
            <Link className="gender-link" to={"/"}>
              Comprar
            </Link>
          </div>
        </div>
        <div className="gender-div">
          <h4 className="gender-title">Hombre</h4>
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <img className="gender-img" src="./img/men.jpeg" alt="hombre" />
            <Link className="gender-link" to={"/"}>
              Comprar
            </Link>
          </div>
        </div>
        <div className="gender-div">
          <h4 className="gender-title">Niño/a</h4>
          <div className="d-flex flex-column  justify-content-center align-items-center">
            <img className="gender-img" src="./img/children.png" alt="niño/a" />
            <Link className="gender-link" to={"/"}>
              Comprar
            </Link>
          </div>
        </div>
      </section>
    </FullWidthLayout>
  );
};

export default Home;
