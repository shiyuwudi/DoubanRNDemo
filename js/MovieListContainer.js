/**
 * Created by apple12 on 2016/11/27.
 */

import React, { Component, PropTypes } from 'react'
import douban from './api/douban'
import MovieList from './MovieList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        listLoading: state.movies.listLoading,
        movies: state.movies.subjects,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHeaderPress: ()=>{
            (async ()=>{
                dispatch({
                    type: "SET_LISTLOADING",
                    listLoading: true
                });
                const result = await douban.getMoviesFromApi();
                dispatch({
                    type: 'IN_THEATERS',
                    data: result,
                });
            })()
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

