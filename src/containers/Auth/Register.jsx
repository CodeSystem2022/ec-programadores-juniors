import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import FullWidthLayout from "../../layouts/FullWidthLayout";
import Logo from "../../../public/logo/logo.png";
import "./Auth.scss";
import Axios from 'axios';
import { toast } from "sonner";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [loading, setLoading] = useState(false);

  // const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post(`${import.meta.env.VITE_APP_HOST}/api/users/`, formData).then(response => {
      if (response.status === 201) {
        toast.success('Usuario creado con éxito');
        navigate('/login');
      }

    }).catch(error => {
      toast.error('Error al crear el usuario');
      // Manejar errores aquí
      console.log(error.response.data);
      // setErrors(error.response.data)
    }).finally(() => {
      // Este bloque se ejecutará sin importar si la solicitud fue exitosa o falló

      // setFormData({ first_name: "", last_name: "", email: "", password: "", re_password: "" });
      setLoading(false);
    });

  };

  return (
    <FullWidthLayout>
      <div className="auth-section">
        <h1 className="help-h1">REGISTRO </h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <img src={Logo} alt="" />
          <div className="form-group d-flex">
            <input

              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group d-flex">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              id="re_password"
              name="re_password"
              placeholder="********"
              value={formData.re_password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}> {loading ? 'loading...' : 'register'}</button>

          <div className="have-account">
            <span>¿Ya tienes una cuenta?</span>
            <Link to={"/login"}>Ingresar</Link>
          </div>
        </form>
        {/* {errors.map((key, index) => {

        })} */}
      </div>
    </FullWidthLayout >
  );
};

export default Register;
