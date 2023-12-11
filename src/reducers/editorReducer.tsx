import { Action, createAction } from "@reduxjs/toolkit";
import { ContentBlock } from "../types";

export type EditingBlockState = ContentBlock | null;

const initialState: EditingBlockState = null;

export const selectEditingBlockAction = createAction<ContentBlock>("editing/select");
export const clearEditingBlockAction = createAction("editing/clear");

const editingBlockReducer = (
  state: EditingBlockState = initialState,
  action: Action,
): EditingBlockState => {
  if (selectEditingBlockAction.match(action)) {
    return action.payload;
  }

  if (clearEditingBlockAction.match(action)) {
    return null;
  }

  return state;
}

export default editingBlockReducer;
