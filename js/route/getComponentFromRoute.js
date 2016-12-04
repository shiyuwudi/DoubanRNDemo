/**
 * Created by apple12 on 2016/12/5.
 */

import MovieDetailContainer from '../containers/MovieDetailContainer'
import MovieListContainer from '../containers/MovieListContainer'

export const initialRoute = { name: "电影列表", component: 'MovieListContainer' };

export const getComponentFromRoute = (route) => {
    let Component;
    switch (route.component) {

        case 'MovieDetailContainer':
            Component = MovieDetailContainer;
            break;

        case 'MovieListContainer':
            Component = MovieListContainer;
            break;

        default:
            Component = route.component;
            break;
    }

    return Component;
};