import { connect } from "react-redux";
import Form from "./Form";
import { aboutValidators, coordinatorValidator } from "../../validators";

const mapStateToProps = (state) => ({ ...state });
const mapStateToDispatch = (dispatch) => ({
  validateForm: ({ aboutReducer, coordinatorReducer, whatReducer }) => {
    const isAboutSectionValid = aboutValidators({
      dispatch,
      title: aboutReducer.title,
      description: aboutReducer.description,
    });

    const isCoordinatorSectionValidate = coordinatorValidator({
      dispatch,
      email: coordinatorReducer.email,
    });

    const isFormValid = isAboutSectionValid && isCoordinatorSectionValidate;
    dispatch({
      type: "FORM_VALIDATION_COMPLETED",
      payload: isFormValid,
    });
    return isFormValid;
  },
});

export default connect(mapStateToProps, mapStateToDispatch)(Form);
