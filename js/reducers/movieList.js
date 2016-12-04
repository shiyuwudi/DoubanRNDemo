/**
 * Created by apple12 on 2016/11/27.
 */

import {combineReducers} from 'redux'

const initialMovies = {
    subjects: [],
    listLoading: false,
};

const getData = (state) => state.movieList.movies;

const getMap = (initialState, getData, state) => {
    const object = {};
    Object.keys(initialState).forEach((key)=>{
        object[key] = getData(state)[key];
    });
    return object;
};

export const mapStateToProps = (state) => getMap(initialMovies, getData, state);


function movies(state = initialMovies, action) {

    switch (action.type) {

        case "IN_THEATERS":
            //正在上映
            return {
                ...state,
                subjects: action.data.subjects,
                listLoading: false,
            };

        case "FETCH_LIST":
            return {
                ...state,
                listLoading: true,
            };

        default:
            return state;
    }

}

export const movieList = combineReducers({ movies });