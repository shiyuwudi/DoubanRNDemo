/**
 * Created by apple12 on 2016/12/4.
 */

import douban from '../api/douban'

import {
    LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE,
    LOAD_DETAIL_REQUEST, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE,
} from '../actionTypes'


const loadMovies = {
    types: [LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE],
    shouldCallAPI: () => true,
    callAPI: douban.getMoviesFromApi,
    payload: {},
};

const loadDetail = (id, navigator) => ({
    types: [LOAD_DETAIL_REQUEST, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE],
    shouldCallAPI: () => true,
    callAPI: () => douban.getMovieDetails(id),
    payload: { id, navigator },
});

export const onHeaderPress = () => (dispatch) => {
    dispatch(loadMovies);
};

export const onRowPress = (id, navigator) => (dispatch) => {
    dispatch(loadDetail(id, navigator));
};
