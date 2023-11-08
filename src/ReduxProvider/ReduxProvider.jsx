
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "../apps/store";
import { persistStore } from 'redux-persist'
const persistor = persistStore(store);

function ReduxProvider({ children }) {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        {children}
      </Provider>
    </PersistGate >

  );
}

export default ReduxProvider;