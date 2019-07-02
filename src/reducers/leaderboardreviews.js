import { LEADERBOARDREVIEWS_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = {
  leaderboardreviews: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_PRODUTO:
    //   console.log('criar produto');
    //   // return { ...state, articles: [...state.articles, action.payload] };
    case LEADERBOARDREVIEWS_FETCH_SUCCEEDED:
      console.log('success leaderboards', action.payload);
      return { ...state, leaderboardreviews: [...state.leaderboardreviews, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;