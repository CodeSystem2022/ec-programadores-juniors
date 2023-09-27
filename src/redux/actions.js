// import axios from "axios";
// import { GET_USERS } from "./actions-types";

// export const getUsers = () => {
//   return async (dispatch) => {
//     try {
//       let response = await axios("user");
//       return dispatch({
//         type: GET_USERS,
//         payload: response.data,
//       });
//     } catch (error) {
//       console.error("Error while fetching all users:", error);
//     }
//   };
// };