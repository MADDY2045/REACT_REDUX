import { data } from "../helpers/data";

const initialState = data;

export const userFetchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { cards, users } = state;
  switch (type) {
    case "DELETE_CARD":
      console.log("deleting id:", payload);
      let newCards = cards.filter((card) => card.id != payload);
      return {
        ...state,
        cards: newCards,
      };
    case "FETCH_USER":
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
};
