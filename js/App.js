/**
 * Created by apple12 on 2016/11/27.
 */

import React, { Component } from 'react';
import { store } from './store'
import { Provider } from 'react-redux'
import { Navigator } from 'react-native'
import { getComponentFromRoute, initialRoute } from './route/getComponentFromRoute'

export default class App extends Component {

    render = () => {
       return (
           <Provider store={store}>
               <Navigator
                   initialRoute={initialRoute}
                   configureScene={(route) => {
                        return Navigator.SceneConfigs.FloatFromRight;
                   }}
                   renderScene={(route, navigator) => {
                        const Component = getComponentFromRoute(route);
                        return <Component {...route.params} navigator={navigator} />
                   }}
               />
           </Provider>
       );
    };

}