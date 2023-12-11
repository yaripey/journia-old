import { Action, createAction } from "@reduxjs/toolkit";
import { PageName } from "../types";

export type PageState = PageName;

const initialState: PageState = "home";

export const changePageAction = createAction<PageName>("page/change");

const pageReducer = (
  state: PageState = initialState,
  action: Action,
): PageState => {
  if (changePageAction.match(action)) {
    return action.payload;
  }

  return state;
}

export default pageReducer;
