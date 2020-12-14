const defaultAboutState = {
  categories: [],
  isTitleValid: true,
  isDescriptionValid: true,
  showFee: false,
  feeValid: true,
};
export default function aboutReducer(state = defaultAboutState, action) {
  switch (action.type) {
    case "LOAD_CATEGORIES":
      return Object.assign({}, { ...state }, { categories: action.payload });
    case "SET_FORM_FIELD_ABOUT":
      return Object.assign({}, { ...state }, { ...action.payload });
    case "VALIDATE_FORM":
      return state;
    case "ABOUT_SECTION_VALIDATE":
      return Object.assign({}, { ...state }, { ...action.payload });
    default:
      return state;
  }
}
