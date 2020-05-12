import { CHANGE_SEARCH_FIELD } from "./constants.jsx";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text,
});
