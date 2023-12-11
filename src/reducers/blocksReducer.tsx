import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContentBlock, NoteBlock } from "../types";

type BlocksState = ContentBlock[];

const initialState = [] as BlocksState;

const blocksSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addNoteBlock(state, action: PayloadAction<NoteBlock>) {
      return [...state, action.payload];
    },
    addNoteBlocks(state, action: PayloadAction<NoteBlock[]>) {
      return [...state, ...action.payload];
    },
    updateNoteBlock(state, action: PayloadAction<NoteBlock>) {
      const updatedBlock = action.payload;
      const blockToChange = state.find(b => b.id === updatedBlock.id);

      if (blockToChange) {
        return state.map(b => b.id !== updatedBlock.id ? updatedBlock : b);
      }

      return state;
    }
  }
});
export const { addNoteBlock, addNoteBlocks, updateNoteBlock } = blocksSlice.actions;
export default blocksSlice.reducer;
