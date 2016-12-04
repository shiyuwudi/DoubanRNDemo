/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  ActivityIndicator,
  Image,
} from 'react-native';

import MovieRow from './MovieRow'
import LoadingButton from './LoadingButton'
import MovieDetail from './MovieDetail'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });

export default ({
  listLoading, onHeaderPress, subjects, navigator, onRowPress
}) => (
    <View style={styles.container}>

      <LoadingButton loading={listLoading} onPress={onHeaderPress} title="加载热映电影"/>

      <ListView
          enableEmptySections
          style={styles.list}
          dataSource={ds.cloneWithRows(subjects)}
          renderRow={(rowData) => (
            <MovieRow
                imageUri={rowData.images.small}
                title={`${rowData.title}（${rowData.year}）`}
                desc={`喜欢：${rowData.collect_count}人；\n分类：${rowData.genres.join('，')}；\n导演：${rowData.directors.map(d=>d.name)}；\n评分：${rowData.rating.average}；`}
                onPress={()=>onRowPress(rowData.id, navigator)}
             />
          )}
      />

    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  list: {
    //backgroundColor: 'red',
  },
});
