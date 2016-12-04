/**
 * Created by apple12 on 2016/11/27.
 */

import {combineReducers} from 'redux'
import getMapStateToProps from './getMapStateToProps'

const initialState = {
    subjects: [],
    listLoading: false,
};

const movies = (state = initialState, action) => {

    switch (action.type) {

        case "IN_THEATERS":
            //正在上映
            return {
                ...state,
                subjects: action.data.subjects,
                listLoading: false,
            };

        case "FETCH_LIST":
            //正在加载
            return {
                ...state,
                listLoading: true,
            };

        default:
            return state;
    }

};

export const movieList = combineReducers({ movies });
export const mapStateToProps = getMapStateToProps(
    initialState,
    (state) => state.movieList.movies,
);