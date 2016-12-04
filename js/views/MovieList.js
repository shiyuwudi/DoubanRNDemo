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

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });
const renderRow = (rowData) => (
    <MovieRow
        imageUri={rowData.images.small}
        title={rowData.title}
        year={rowData.year}
        collect_count={rowData.collect_count}
    />
);

export default ({
  listLoading, onHeaderPress, subjects,
}) => (
    <View style={styles.container}>

      <LoadingButton loading={listLoading} onPress={onHeaderPress} title="加载热映电影"/>

      <ListView
          enableEmptySections
          style={styles.list}
          dataSource={ds.cloneWithRows(subjects)}
          renderRow={renderRow}
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
  seperator: {
    backgroundColor: 'brown',
    height: 1,
    marginLeft: 20
  }
});
