'use strict';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { post } from './post';
import { posts } from './post-listing';
import { categories } from './category-listing';
import { nav, activeTabIndex } from './navigation';
import { user } from './user';

const rootReducer = combineReducers({
  post,
  posts,
  categories,
  nav,
  activeTabIndex,
  user,
  form: formReducer,
});

export default rootReducer;
