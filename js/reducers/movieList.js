/**
 * Created by apple12 on 2016/11/27.
 */

import {combineReducers} from 'redux'
import getMapStateToProps from './getMapStateToProps'
import {
    LOAD_MOVIES_REQUEST, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_FAILURE,
    LOAD_DETAIL_REQUEST, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE,
} from '../actionTypes'

const initialState = {
    subjects: [],
    details: {},
    listLoading: false,
    detailLoading: {},
};

const movies = (state = initialState, action) => {

    switch (action.type) {

        case LOAD_DETAIL_FAILURE:
        case LOAD_MOVIES_FAILURE:
            //加载失败
            const { error, payload } = action;
            console.warn('请求出错：', error);
            console.warn('参考信息', payload);

        case LOAD_DETAIL_SUCCESS:
            //电影详情加载完毕
            const { id, navigator, data } = action;
            navigator.push({
                name: '影片详情',
                component: 'MovieDetailContainer',
                params: { id },
            });
            return {
                ...state,
                details: {
                    ...state.details,
                    [id]: data,
                },
                detailLoading: {
                    ...state.detailLoading,
                    [id]: false,
                },
            };

        case LOAD_DETAIL_REQUEST:
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

        case LOAD_MOVIES_SUCCESS:
            //正在上映
            return {
                ...state,
                subjects: action.data.subjects,
                listLoading: false,
            };

        case LOAD_MOVIES_REQUEST:
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