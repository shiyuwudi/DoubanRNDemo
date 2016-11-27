/**
 * Created by apple12 on 2016/11/27.
 */

import { createStore } from 'redux'
import myCombineReducers from './myCombineReducers'

const combinedReducer = myCombineReducers({ movies, actors});
export const store = createStore(combinedReducer);

function movies(state = [], action) {

    switch (action.type) {

        case "IN_THEATERS":
            //正在上映
            return action.data.subjects;

        default:
            return state;
    }

};

function actors(state = {}, action) {

    switch (action.type) {

        case "ACTORS":
            return {...action.actors};

        default:
            return state;
    }

}