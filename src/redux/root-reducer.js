import { combineReducers } from "redux";

import { searchRobots, requestRobots } from "./robot/robot.reducers";

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

export default rootReducer;
