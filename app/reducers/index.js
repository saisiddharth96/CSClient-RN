"use strict";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { posts } from "./post-listing";
import { categories } from "./category-listing";
import { nav, activeTabIndex } from "./navigation";

const rootReducer = combineReducers({
  posts,
  categories,
  nav,
  activeTabIndex,
  form: formReducer
});

export default rootReducer;
