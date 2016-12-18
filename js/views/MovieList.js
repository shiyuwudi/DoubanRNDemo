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

import MovieRow from '../containers/MovieRowContainer'
import LoadingButton from './LoadingButton'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id });

export default ({
    listLoading, subjects, detailLoading, onHeaderPress, ...props,
}) => (
    <View style={styles.container}>

      <LoadingButton loading={listLoading} onPress={onHeaderPress} title="加载热映电影"/>

      <ListView
          enableEmptySections
          style={styles.list}
          dataSource={ds.cloneWithRows(subjects)}
          renderRow={(rowData) => <MovieRow {...props} rowData={rowData} />}
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
