import { FetchImages } from "./actions";

const initialState = {
  photos: [],
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FetchImages:
      return {
        ...state,
        photos: action.payload,
      };
    default:
      return state;
  }
};

export default imagesReducer;