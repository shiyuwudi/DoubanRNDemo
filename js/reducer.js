/**
 * Created by apple12 on 2016/11/27.
 */

import { createStore, combineReducers } from 'redux'

// const mainReducer = combineReducers({
//     film,
// });
//const store = createStore(mainReducer);

export const combinedReducer = myCombineReducers({ film, actors});

function myCombineReducers(reducers) {

    const bigReducer = (state = {}, action) => {
        //大的reducer负责把任务交给小的reducer们
        /*
        * 要达到的效果就是:
        * reducers = {
        *   film: film,
        *   actors: actors,
        * }
        * 合并之后:
        * store = {
        *   film:  film(state.film, action),
        *   actors: actors(state.actors, action),
        *   ......
        * }
        *
        * */

        return Object.keys(reducers).reduce(
            (nextStore, key) => {
                nextStore[key] = reducers[key](state[key], action);
                return nextStore;
            }, {}
        );
    };
    return bigReducer;
};

function film(state = {}, action) {

    switch (action.type) {

        case "IN_THEATERS":
            //正在上映
            return {...action.film};

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


// export const test1 = () => {
//     console.log(store.getState());
//
//     store.dispatch({
//         type: 'IN_THEATERS',
//         'film': {
//             'top_1': 'im not Panjinlian + 1'
//         },
//     });
//
//     return store.getState();
// };
//
// const cb = ()=>{
//     console.log("store is updated");
// };
//
// store.subscribe(cb);