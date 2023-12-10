import { Action } from "redux";
import { createAction } from "@reduxjs/toolkit";

import { ContentBlock } from "../types";

export interface State {
  blocks: ContentBlock[],
}

const initialState: State = {
  blocks: [],
}

export const addNoteBlockAction =
  createAction<{ block: ContentBlock }>("blocks/note/add");

export const addNoteBlocksAction =
  createAction<{ blocks: ContentBlock[] }>("block/note/addMany");

export const updateNoteBlockAction =
  createAction<{ block: ContentBlock }>("block/note/update");

export const deleteNoteBlockAction =
  createAction<{ id: number }>("block/note/update");

const mainReducer = (
  state: State = initialState,
  action: Action
): State => {
  if (addNoteBlockAction.match(action)) {
    const newNoteBlock = action.payload.block;
    const newBlocks = [...state.blocks, newNoteBlock];

    return { ...state, blocks: newBlocks };
  }

  if (addNoteBlocksAction.match(action)) {
    const newNoteBlocks = action.payload.blocks;
    const newBlocks = [...state.blocks, ...newNoteBlocks];

    return { ...state, blocks: newBlocks };
  }

  if (updateNoteBlockAction.match(action)) {
    console.log("update procced");
    const newBlock = action.payload.block;
    const newBlocks = state.blocks.map(b => b.id === newBlock.id ? newBlock : b);
    console.log(newBlock);

    console.log(state.blocks);
    console.log(newBlocks);

    return { ...state, blocks: newBlocks };
  }

  return state;
}

export default mainReducer;
