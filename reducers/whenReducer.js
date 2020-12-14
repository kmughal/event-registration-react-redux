
const defaultWhenState = {};
export default function whenReducer(state = defaultWhenState, action) {
  switch (action.type) {
    case "SET_FORM_FIELD_WHEN":
      return Object.assign({}, { ...state }, { ...action.payload });
    case "VALIDATE_FORM":
      return state;
    case "WHEN_SECTION_VALIDATE":
      return Object.assign({}, { ...state }, { ...action.payload });
    default:
      return state;
  }
}
