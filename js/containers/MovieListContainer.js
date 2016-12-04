/**
 * Created by apple12 on 2016/11/27.
 */

import React from 'react'

import { connect } from 'react-redux'
import MovieList from '../views/MovieList'
import { mapStateToProps } from '../reducers/movieList'
import { mapDispatchToProps } from '../actions/movieAction'

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

