import { FormContainer } from "../components";
import { Provider } from "react-redux";
import store from "../store";

export default () => {
  return (
    <Provider store={store}>
      <FormContainer />
    </Provider>
  );
};
