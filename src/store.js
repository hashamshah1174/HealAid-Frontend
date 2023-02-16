import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "../src/app/reducers";

const initialState = {
  sidebarShow: true,
};
const middleware = [thunk];

const changeState = (state = initialState, action) => {
  const { type, ...rest } = action || {}; // default to empty object if action is undefined
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const enhancers = [applyMiddleware(...middleware), changeState];

const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, composedEnhancers);

export default store;
