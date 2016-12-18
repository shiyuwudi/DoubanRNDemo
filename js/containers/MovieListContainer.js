/**
 * Created by apple12 on 2016/11/27.
 */

import React from 'react'

import { connect } from 'react-redux'
import MovieList from '../views/MovieList'
import { mapStateToProps } from '../reducers/movieList'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/movieAction'

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

