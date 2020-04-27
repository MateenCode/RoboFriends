import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./robort.types";

const intialState = {
  searchField: ""
};

export const searchRobots = (state = intialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (state = intialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING
  }
};
