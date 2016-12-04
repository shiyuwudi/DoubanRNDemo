/**
 * Created by apple12 on 2016/11/27.
 */

import {combineReducers} from 'redux'
import getMapStateToProps from './getMapStateToProps'
import {
    FETCH_LIST, IN_THEATERS, FETCH_DETAIL, MOVIE_DETAILS
} from '../actions/movieAction'

const initialState = {
    subjects: [],
    details: {},
    listLoading: false,
    detailLoading: {},
};

const movies = (state = initialState, action) => {

    switch (action.type) {

        case MOVIE_DETAILS:
            //电影详情加载完毕
            return {
                ...state,
                details: {
                    ...state.details,
                    [action.id]: action.data,
                },
                detailLoading: {
                    ...state.detailLoading,
                    [action.id]: false,
                },
            };

        case FETCH_DETAIL:
            //正在加载电影详情
            return {
                ...state,
                details: {
                    ...state.details,
                    [action.id]: {},
                },
                detailLoading: {
                    ...state.detailLoading,
                    [action.id]: true,
                },
            };

        case IN_THEATERS:
            //正在上映
            return {
                ...state,
                subjects: action.data.subjects,
                listLoading: false,
            };

        case FETCH_LIST:
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