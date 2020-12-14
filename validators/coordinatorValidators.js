export default ({ dispatch, email }) => {
  const coordinatorValidator = {
    isCategorySelected: email && String(email).length > 0,
  };

  dispatch({
    type: "COORDINATOR_SECTION_VALIDATE",
    payload: coordinatorValidator,
  });

  return coordinatorValidator.isCategorySelected;
};
