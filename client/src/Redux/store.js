import { createStore, applyMiddleware } from "redux";
import thunk  from 'redux-thunk';

// redux-middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === "development"){
    const {logger} = require ("redux-logger");
    middlewares.push(logger);
}



import rootReducer from "./Reducer/rootReducer";
const store = createStore(rootReducer,{},applyMiddleware(...middlewares));

export default store;