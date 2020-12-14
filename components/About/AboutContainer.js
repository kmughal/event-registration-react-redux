import { connect } from "react-redux";
import About from "./About";
import { getCategories, setField } from "../../actions";

const mapStateToProps = ({ aboutReducer }) => ({
  ...aboutReducer,
});

const mapStateToDispatch = (dispatch) => ({
  getCategories: () => getCategories(dispatch),
  setField: (data, event) => setField(dispatch, data, event),
});

export default connect(mapStateToProps, mapStateToDispatch)(About);
