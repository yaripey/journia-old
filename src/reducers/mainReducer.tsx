import { combineReducers } from "redux";
import blocksReducer, { BlocksState } from "./blocksReducer";
import pageReducer, { PageState } from "./pageReducer";

const mainReducer = combineReducers({
  blocks: blocksReducer,
  currentPage: pageReducer,
});

export interface MainState {
  blocks: BlocksState,
  currentPage: PageState,
}

export default mainReducer;
