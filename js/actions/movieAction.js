/**
 * Created by apple12 on 2016/12/4.
 */

import douban from '../api/douban'
import { bindActionCreators } from 'redux'

export const FETCH_LIST = "FETCH_LIST";
export const IN_THEATERS = "IN_THEATERS";
export const FETCH_DETAIL = "FETCH_DETAIL";
export const MOVIE_DETAILS = "MOVIE_DETAILS";

const fetchList = { type: FETCH_LIST };
const movies = (data) => ({ type: IN_THEATERS, data});

const fetchDetail = (id) => ({ type: FETCH_DETAIL, id });
const movieDetail = (data, id) => ({ type: MOVIE_DETAILS, data, id});

const actions = {
    onHeaderPress(){
        return (dispatch) => {
            (async() => {
                dispatch(fetchList);
                const result = await douban.getMoviesFromApi();
                dispatch(movies(result));
            })();
        }
    },
    onRowPress(id, navigator){
        return (dispatch) => {
            (async() => {
                dispatch(fetchDetail(id));
                navigator.push({
                    name: '影片详情',
                    component: 'MovieDetailContainer',
                    params: { id },
                });
                const result = await douban.getMovieDetails(id);
                dispatch(movieDetail(result, id));
                console.log('details', result);
            })();
        }
    },
};

export const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);