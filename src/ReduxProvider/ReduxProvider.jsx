
import { Provider } from "react-redux";
import store from "../apps/store";


function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;