export default function aboutValidators({ dispatch, title, description }) {
  const aboutValidator = {
    isTitleValid: !!title && String(title.length) > 0,
    isDescriptionValid: description && String(description.length) > 0,
  };

  dispatch({ type: "ABOUT_SECTION_VALIDATE", payload: aboutValidator });
  return aboutValidator.isTitleValid && aboutValidator.isDescriptionValid;
}
