import { connect } from "react-redux";
import About from "./About";
import { getCategories, setField } from "../../actions";

const mapStateToProps = ({ aboutReducer }) => ({
  ...aboutReducer,
});

const mapStateToDispatch = {
  getCategories,
  setField,
};

export default connect(mapStateToProps, mapStateToDispatch)(About);
