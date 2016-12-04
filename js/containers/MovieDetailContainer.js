/**
 * Created by apple12 on 2016/12/4.
 */
import React, { Component } from 'react'

import { connect } from 'react-redux'
import MovieDetail from '../views/MovieDetail'
import { mapStateToProps } from '../reducers/movieList'
import { mapDispatchToProps } from '../actions/movieAction'

class MovieDetailContainer extends Component {
    render = () => {
        const { details, detailLoading, id} = this.props;
        return (
            <MovieDetail
                detail={details[id]}
                loading={detailLoading[id]}
            />
        );
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer);