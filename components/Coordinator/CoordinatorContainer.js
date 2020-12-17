import { connect } from "react-redux";
import Coordinator from "./Coordinator";
import { getResponsibles, setField } from "../../actions";

const mapStateToProps = ({ coordinatorReducer }) => ({
  ...coordinatorReducer,
});

const mapStateToDispatch = {
  getResponsibles,
  setField,
};

export default connect(mapStateToProps, mapStateToDispatch)(Coordinator);
