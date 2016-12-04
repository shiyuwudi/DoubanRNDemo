/**
 * Created by apple12 on 2016/12/4.
 */

import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import reducers from './combinedReducers'
import thunk from 'redux-thunk'

export const store = createStore(
    reducers,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);