import { combineReducers } from "redux";
import blocksReducer, { BlocksState } from "./blocksReducer";
import pageReducer, { PageState } from "./pageReducer";
import editingBlockReducer, { EditingBlockState } from "./editorReducer";

const mainReducer = combineReducers({
  blocks: blocksReducer,
  currentPage: pageReducer,
  editingBlock: editingBlockReducer,
});

export interface MainState {
  blocks: BlocksState,
  currentPage: PageState,
  editingBlock: EditingBlockState
}

export default mainReducer;
