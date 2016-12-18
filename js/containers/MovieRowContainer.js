/**
 * Created by apple12 on 2016/12/18.
 */

import React, { Component } from 'react';
import MovieRow from '../views/MovieRow'

class MovieRowContainer extends Component {
    render(){
        const { rowData, onRowPress, navigator } = this.props;
        const imageUri = rowData.images.small;
        const title = `${rowData.title}（${rowData.year}）`;
        const desc = `喜欢：${rowData.collect_count}人；\n分类：${rowData.genres.join('，')}；\n导演：${rowData.directors.map(d=>d.name)}；\n评分：${rowData.rating.average}；`;
        const onPress = () => onRowPress(rowData.id, navigator);
        return (
            <MovieRow
                imageUri={imageUri}
                title={title}
                desc={desc}
                onPress={onPress}
            />
        );
    }
}

export default (MovieRowContainer);