import { connect } from "react-redux";
import When from "./When";
import { getResponsibles, setField } from "../../actions";

const mapStateToProps = ({ whenReducer }) => ({
  ...whenReducer,
});

const mapStateToDispatch = (dispatch) => ({
  setField: (data) => setField(dispatch, data, "when"),
});

export default connect(mapStateToProps, mapStateToDispatch)(When);
