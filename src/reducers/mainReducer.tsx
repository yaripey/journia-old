import { combineReducers } from "redux";
import blocksReducer from "./blocksReducer";
import pageReducer from "./pageReducer";
import editingBlockReducer from "./editorReducer";

const mainReducer = combineReducers({
  blocks: blocksReducer,
  currentPage: pageReducer,
  editingBlock: editingBlockReducer,
});
export type MainState = ReturnType<typeof mainReducer>;

export default mainReducer;
