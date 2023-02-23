import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducr from "./reducers/homeReducr";
import loginReducr from "./reducers/loginReducr";
import registerReducr from "./reducers/registerReducr";
import alluserReducr from "./reducers/alluserReducr";

const store = createStore(
  combineReducers({
    homeGlobelState: homeReducr,
    loginGlobelState: loginReducr,
    registerGlobelState: registerReducr,
    alluserGlobelSate: alluserReducr,
  }),
  applyMiddleware(thunk)
);

export default store;
