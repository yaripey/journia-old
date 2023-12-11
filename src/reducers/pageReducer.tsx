import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PageName } from "../types";

type PageState = PageName;

const initialState = "home" as PageState;

const pageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    changePage(_state, action: PayloadAction<PageName>) {
      return action.payload;
    }
  }
});

export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;
