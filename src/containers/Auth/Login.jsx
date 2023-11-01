import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import Logo from "../../../public/logo/logo.png";
import "./Auth.scss";
import Axios from 'axios';
import { toast } from "sonner";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();
    setLoading(true);
    Axios.post(`${import.meta.env.VITE_APP_HOST}/api/jwt/create/`, formData, {withCredentials: true}).then(response => {
      if (response.status === 200) {
        toast.success('Sesión iniciada');
        console.log(response.data)
        // navigate('/');
      }

    }).catch(error => {
      toast.error('Error al iniciar sesión');
      // Manejar errores aquí
      if (error.response) {
        console.log(error.response.data);
      }
      // setErrors(error.response.data)
    }).finally(() => {
      // Este bloque se ejecutará sin importar si la solicitud fue exitosa o falló

      // setFormData({ first_name: "", last_name: "", email: "", password: "", re_password: "" });
      setLoading(false);
    });


    // setFormData({ email: "", password: "" });
  };

  return (
    <FullWidthLayout>
      <div className="auth-section">
        <h1 className="help-h1">INGRESAR</h1>
        <p>¡Bienvenido! Ingresa a tu cuenta</p>
        <div className="auth-form">
          <img src={Logo} alt="" />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
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
            <button type="submit" disabled={loading}> {loading ? 'Loading...' : 'Ingresar'}</button>

            <Link className="login-link">¿Olvidaste tu contraseña?</Link>
            <div className="have-account">
              <span>¿No tienes una cuenta?</span>
              <Link to={"/register"}>Regístrate</Link>
            </div>
          </form>
        </div>
      </div>
    </FullWidthLayout>
  );
};

export default Login;
