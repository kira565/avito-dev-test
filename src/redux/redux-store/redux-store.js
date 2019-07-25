import {createStore, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk'
import applyMiddleware from "redux/src/applyMiddleware";
import productsReducer, {RESET_FILTER} from "./productsReducer";
import headerReducer from "./headerReducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    products: productsReducer,
    header: headerReducer,
    form: formReducer.plugin({
        FilteringForm: (state, action) => {
            switch (action.type){
                case RESET_FILTER: {
                    return undefined
                }
                default: return state
            }
        }
    })
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;