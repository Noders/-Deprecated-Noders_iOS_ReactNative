import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight, Image, ScrollView, ActivityIndicatorIOS } from 'react-native';
import PodcastListItem from './podcastsListItem';
import SGListView from 'react-native-sglistview';

const DS = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
});
export default class podcastsList extends Component{
  render() {
    return(
      <View style={styles.container}>
        <SGListView
            scrollRenderAheadDistance={200}
            dataSource={DS.cloneWithRows(this.props.podcasts)}
            renderRow={(rowData) => <PodcastListItem podcast={rowData}/>}
            style={styles.list}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    overflow:'hidden'
  }
});
