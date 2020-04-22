import { combineReducers } from "redux";

import searchRobots from "./search/search.reducers";

const rootReducer = combineReducers({
  search: searchRobots,
});

export default rootReducer;
