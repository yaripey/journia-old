import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContentBlock } from "../types";

type EditingBlockState = ContentBlock | null;

const initialState = null as EditingBlockState;

const editingBlockSlice = createSlice({
  name: "editingBlock",
  initialState,
  reducers: {
    selectEditingBlock(_state, action: PayloadAction<ContentBlock>) {
      return action.payload;
    },
    clearEditingBlock() {
      return null;
    },
  }
});

export const { selectEditingBlock, clearEditingBlock } = editingBlockSlice.actions;
export default editingBlockSlice.reducer;
