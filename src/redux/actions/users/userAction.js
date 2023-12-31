// userActions.js
import Axios from "axios";
import { setUser, unsetUser } from "../../reducers/userSlice";
import Cookies from 'js-cookie';

// Función para obtener los datos del usuario
export const fetchUserData = async (dispatch) => {
  try {
    const res = await Axios.get(`${import.meta.env.VITE_APP_HOST}/users/me`, {
      withCredentials: true,
    });
    if (res.status === 200) {
      const user = res.data;
      dispatch(setUser(user));
      // Guardar los datos del usuario en localStorage
      localStorage.setItem("user", JSON.stringify(user));
    }
  } catch (error) {
    // Manejar errores aquí
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    Cookies.remove("access");
    Cookies.remove("refresh");
    localStorage.removeItem("user");
    dispatch(unsetUser());
    window.location.reload();
  } catch (error) {
    console.error("Error al realizar la solicitud de cierre de sesión:", error);
  }
};
