/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  ActivityIndicator,
  Image,
} from 'react-native';
import douban from './api/douban'
import { store } from './reducer'



export default class HomePage extends Component {

  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    this.state = {
      listLoading: false,
    };
  }

  componentDidMount() {

  }

  getMovies = ()=>{

    if (this.props.store) {
        console.log(this.props.store.film);
    }


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
  }

  renderRow = (rowData)=>{
    return (
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
  };



  render = () => {

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});

    return (
      <View style={styles.container}>

        <RefreshHeader loading={this.state.listLoading} onPress={this.getMovies}/>

        <ListView
          enableEmptySections
          style={styles.list}
          dataSource={ds.cloneWithRows(this.props.film)}
          renderRow={this.renderRow}
        />

      </View>
    );
  }
}

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
