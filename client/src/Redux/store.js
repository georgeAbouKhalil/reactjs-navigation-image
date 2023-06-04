import { legacy_createStore as createStore } from "redux";
import imagesReducer from "./reducers";

import {  applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(imagesReducer, composeWithDevTools(applyMiddleware()));

export default store;