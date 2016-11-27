/**
 * Created by apple12 on 2016/11/27.
 */

import { createStore } from 'redux'
const store = createStore(film);

function film(state = {}, action) {

    switch (action.type) {

        case "IN_THEATERS":
            //正在上映
            return {...action.film};

        default:
            return state;
    }

};


export const test1 = () => {
    console.log(store.getState());
    store.dispatch({
        type: 'IN_THEATERS',
        'film': {
            'top_1': 'im not Panjinlian + 1'
        },
    });
    test("a test", ()=>{
        expect(1+1).toBe(2);
    });
    return store.getState();
};

const cb = ()=>{
    console.log("store is updated");
};

store.subscribe(cb);