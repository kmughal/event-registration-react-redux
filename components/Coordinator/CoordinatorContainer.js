import { connect } from "react-redux";
import Coordinator from "./Coordinator";
import { getResponsibles, setField } from "../../actions";

const mapStateToProps = ({ coordinatorReducer }) => ({
  ...coordinatorReducer,
});

const mapStateToDispatch = (dispatch) => ({
  getResponsibles: () => getResponsibles(dispatch),
  setField: (data, event) => setField(dispatch, data, event),
});

export default connect(mapStateToProps, mapStateToDispatch)(Coordinator);
