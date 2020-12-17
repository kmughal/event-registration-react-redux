export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
// export const LOAD_CATEGORIES_COMPLETED = "LOAD_CATEGORIES_COMPLETED";

export const getCategories = () => async (dispatch) => {
  const payload = await fetch(
    `http://localhost:3000/api/events?type=categories`
  ).then((r) => r.json());
  dispatch({ type: "LOAD_CATEGORIES", payload });
};

export const getResponsibles = () => async (dispatch) => {
  const payload = await fetch(
    `http://localhost:3000/api/events?type=responsibles`
  ).then((r) => r.json());
  dispatch({ type: "LOAD_RESPONSIBLES", payload });
};

export const setField = (data, event) => (dispatch) => {
  let payload = {};
  data.map((v) => (payload[Object.keys(v)] = v[Object.keys(v)[0]]));

  dispatch({
    type: "SET_FORM_FIELD_" + String(event).toUpperCase(),
    payload,
  });
};

export const submitForm = (dispatch, getState) => {
  debugger;
};
