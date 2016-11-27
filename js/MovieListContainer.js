/**
 * Created by apple12 on 2016/11/27.
 */

import React, { Component } from 'react';
import { store } from './reducer'
import douban from './api/douban'
import MovieList from './MovieList'

export default class MovieListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listLoading: false,
        };
    }

    componentDidMount = () => {
        this.unsubcribe = store.subscribe(()=>{
            this.forceUpdate();
        });
    };

    componentWillUnmount = () => {
        this.unsubcribe();
    };

    getMovies = ()=>{
        (async ()=>{
            this.setState({ listLoading: true });
            const result = await douban.getMoviesFromApi();
            const action = {
                type: 'IN_THEATERS',
                data: result,
            };
            store.dispatch(action);
            this.setState({ listLoading: false });
        })()
    };

    render = () => {
        const state = store.getState();
        return (
            <MovieList
                listLoading={this.state.listLoading}
                movies={state.movies}
                onHeaderPress={this.getMovies}
            />
        );
    };

}