/**
 * Created by apple12 on 2016/12/4.
 */

import douban from '../api/douban'
import { bindActionCreators } from 'redux'

const fetchList = { type: "FETCH_LIST" };
const movies = (data) => ({ type: 'IN_THEATERS', data});

const actions = {
    onHeaderPress(){
        return (dispatch) => {
            (async() => {
                dispatch(fetchList);
                const result = await douban.getMoviesFromApi();
                dispatch(movies(result));
            })();
        }
    }
};

export const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);