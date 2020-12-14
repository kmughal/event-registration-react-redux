export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
// export const LOAD_CATEGORIES_COMPLETED = "LOAD_CATEGORIES_COMPLETED";

export const getCategories = (dispatch) => {
  fetch(`http://localhost:3000/api/events?type=categories`)
    .then((r) => r.json())
    .then((payload) => dispatch({ type: "LOAD_CATEGORIES", payload }));
};

export const getResponsibles = (dispatch) => {
  fetch(`http://localhost:3000/api/events?type=responsibles`)
    .then((r) => r.json())
    .then((payload) => dispatch({ type: "LOAD_RESPONSIBLES", payload }));
};

export function setField(dispatch, data, event) {
  let payload = {};
  data.map((v) => (payload[Object.keys(v)] = v[Object.keys(v)[0]]));

  dispatch({
    type: "SET_FORM_FIELD_" + String(event).toUpperCase(),
    payload,
  });
}

export const submitForm = (dispatch,getState) => {
  debugger;
}
