const defaultCordinatorState = {
  responsibles: [],
  isEmailProvided: true,
  isCategorySelected: true,
};
export default function coordinatorReducer(
  state = defaultCordinatorState,
  action
) {
  switch (action.type) {
    case "LOAD_RESPONSIBLES":
      return Object.assign({}, { ...state }, { responsibles: action.payload });
    case "SET_FORM_FIELD_COORDINATOR":
    case "COORDINATOR_SECTION_VALIDATE":
    case "FORM_VALIDATION_COMPLETED":
      return Object.assign({}, { ...state }, { ...action.payload });
    case "VALIDATE_FORM":
      return state;
    default:
      return state;
  }
}
