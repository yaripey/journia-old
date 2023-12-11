import { Action } from "redux";
import { createAction } from "@reduxjs/toolkit";

import { ContentBlock } from "../types";

export type BlocksState = ContentBlock[];

const initialState: BlocksState = [];

export const addNoteBlockAction = createAction<ContentBlock>("block/note/add");
export const addNoteBlocksAction = createAction<ContentBlock[]>("block/note/addMany");
export const updateNoteBlockAction = createAction<ContentBlock>("block/note/update");
export const deleteNoteBlockAction = createAction<number>("block/note/update");

const blocksReducer = (
  state: BlocksState = initialState,
  action: Action
): BlocksState => {
  if (addNoteBlockAction.match(action)) {
    const newNoteBlock = action.payload;
    const newBlocks = [...state, newNoteBlock];

    return newBlocks;
  }

  if (addNoteBlocksAction.match(action)) {
    const newNoteBlocks = action.payload;
    const newBlocks = [...state, ...newNoteBlocks];

    return newBlocks;
  }

  if (updateNoteBlockAction.match(action)) {
    const newBlock = action.payload;
    const newBlocks = state.map(b => b.id === newBlock.id ? newBlock : b);

    return newBlocks;
  }

  return state;
}

export default blocksReducer;
