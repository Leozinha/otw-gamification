import { LEADERBOARDPOINTS_FETCH_SUCCEEDED } from "../constants/action-types";

const initialState = {
  leaderboardpoints: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_PRODUTO:
    //   console.log('criar produto');
    //   // return { ...state, articles: [...state.articles, action.payload] };
    case LEADERBOARDPOINTS_FETCH_SUCCEEDED:
      console.log('success leaderboards', action.payload);
      return { ...state, leaderboardpoints: [...state.leaderboardpoints, ...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;