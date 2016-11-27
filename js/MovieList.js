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

const renderRow = (rowData)=>(
    <View>
      <View style={styles.contentView}>

        <Image
            source={{uri: rowData.images.small}}
            style={{width: 80, height: 100}}
        />

        <View style={styles.cellRight}>

          <Text style={styles.title}>{`${rowData.title}（${rowData.year}）`}</Text>

          <View style={styles.desc}>
            <Text>{`喜欢：${rowData.collect_count}人`}</Text>
          </View>

        </View>


      </View>
      <View style={styles.seperator}></View>
    </View>
);

export default MovieList = ({
  listLoading, onHeaderPress, movies
}) => (
    <View style={styles.container}>

      <RefreshHeader loading={listLoading} onPress={onHeaderPress}/>

      <ListView
          enableEmptySections
          style={styles.list}
          dataSource={(new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})).cloneWithRows(movies)}
          renderRow={renderRow}
      />

    </View>
);

const RefreshHeader = ({
  loading, onPress,
}) => (
    loading ?
        <ActivityIndicator animating size="large"/>
        :
        <Button
            style={styles.topButton}
            onPress={onPress}
            title="加载热映电影"
            color="blue"
            accessibilityLabel="Learn more about this purple button"
        />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  topButton: {
    backgroundColor: 'green',
    marginTop: 64,
  },
  list: {
    //backgroundColor: 'red',
  },
  contentView: {
    flex:1,
    flexDirection: 'row',
    padding: 8
  },
  cellRight: {
    flex:1,

  },
  title: {
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  desc:{

  },
  seperator: {
    backgroundColor: 'brown',
    height: 1,
    marginLeft: 20
  }
});
