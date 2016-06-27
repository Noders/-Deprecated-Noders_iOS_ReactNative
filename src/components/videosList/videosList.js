import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight, Image, ScrollView, ActivityIndicatorIOS } from 'react-native';
import VideoListItem from './videoListItem';
import VideoListItemSlim from './videoListItemSlim';

const DS = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2
});
export default class videosList extends Component{
  render() {
    return(
      <View style={styles.container}>
        <ListView
            initialListSize={3}
            scrollRenderAheadDistance={200}
            dataSource={DS.cloneWithRows(this.props.videos)}
            renderRow={(rowData) => <VideoListItemSlim video={rowData}/>}
            style={styles.list}
        />
      </View>
    );
  }
}
/*
<LoadingOverlay icon="9CubeGrid" isVisible={this.state.isVisible} style={{flex: 1,alignSelf: 'center'}}/>
*/

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
