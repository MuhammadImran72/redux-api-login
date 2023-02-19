import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducr from "./reducers/homeReducr";
import loginReducr from "./reducers/loginReducr";
import registerReducr from "./reducers/registerReducr";

const store = createStore(
  combineReducers({
    homeGlobelState: homeReducr,
    loginGlobelState: loginReducr,
    registerGlobelState: registerReducr,
  }),
  applyMiddleware(thunk)
);

export default store;
