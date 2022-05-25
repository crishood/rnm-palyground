import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/Posts.reducer";


const rootReducer = combineReducers({
    postsReducer,
});


const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);
