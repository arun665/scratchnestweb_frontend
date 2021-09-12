import BookReducer from "./book/bookReducer";
import { createStore , applyMiddleware} from "redux";
import thunkMiddleWare from 'redux-thunk';
import  logger from 'redux-logger';
import passReducer from './reducer/passReducer';
const store=createStore(passReducer,applyMiddleware(thunkMiddleWare));

export default store;