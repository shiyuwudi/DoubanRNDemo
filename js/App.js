/**
 * Created by apple12 on 2016/11/27.
 */

import React, { Component, PropTypes } from 'react';
import MovieListContainer from './MovieListContainer'
import { store } from './reducer'

export default class App extends Component {

    render = () => {
       return (
           <Provider store={store}>
               <MovieListContainer  />
           </Provider>
       );
    };

}

class Provider extends Component {

    getChildContext = () => {
        return {
            store: this.props.store
        };
    };

    render = () => {
        return this.props.children;
    };
}

Provider.childContextTypes = {
    store: PropTypes.object
};