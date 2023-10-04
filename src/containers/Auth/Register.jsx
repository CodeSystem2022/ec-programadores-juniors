import React, { useState } from "react";
import { Link } from "react-router-dom";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import Logo from "../../../public/logo/logo.png";
import "./Auth.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ usuario: "", password: "" });
  };

  return (
    <FullWidthLayout>
      <div className="auth-section">
        <h1 className="help-h1">REGISTRO</h1>
        <div className="auth-form">
          <img src={Logo} alt="" />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Registrarse</button>

            <div className="have-account">
              <span>¿Ya tienes una cuenta?</span>
              <Link to={"/login"}>Ingresar</Link>
            </div>
          </form>
        </div>
      </div>
    </FullWidthLayout>
  );
};

export default Register;
