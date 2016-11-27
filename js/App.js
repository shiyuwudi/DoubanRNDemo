/**
 * Created by apple12 on 2016/11/27.
 */

import React, { Component } from 'react';
import Homepage from './homepage'
import { store } from './reducer'

export default class App extends Component {

    componentDidMount = () => {
        store.subscribe(()=>{
            this.forceUpdate();
        });
    };

    render = () => {
       return (
           <Homepage {...store.getState()} />
       );
    };

}
