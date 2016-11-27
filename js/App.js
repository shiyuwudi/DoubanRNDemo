/**
 * Created by apple12 on 2016/11/27.
 */

import React, { Component, PropTypes } from 'react';
import MovieListContainer from './MovieListContainer'
import { store } from './reducer'
import { Provider } from 'react-redux'

export default class App extends Component {

    render = () => {
       return (
           <Provider store={store}>
               <MovieListContainer  />
           </Provider>
       );
    };

}