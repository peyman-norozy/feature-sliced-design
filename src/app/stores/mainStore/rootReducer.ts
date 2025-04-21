import { articleReducer } from "@/entites/article/model";
import { userReducer } from "@/entites/user/model";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  user: userReducer,
  article: articleReducer,
});
