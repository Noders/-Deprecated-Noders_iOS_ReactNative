import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class videosListItem extends Component{
  showVideoDetail(video){
    Actions.youtubeDetail(video)
  }
  convert_time(duration) {
    return duration.replace("PT","").replace("H",":").replace("M",":").replace("S","");
  }
  render() {
    const {video} = this.props;
    return(
        <TouchableHighlight underlayColor='#CCC' onPress={() => {this.showVideoDetail(video)}}>
            <View style={styles.celda}>
                <Image style={styles.logo} source={{uri: video.snippet.thumbnails.high.url}}>
                    <View style={styles.nestedView}>
                        <Text style={styles.title}>{video.snippet.title}</Text>
                        <Text style={styles.duration}>{this.convert_time(video.contentDetails.duration)}</Text>
                    </View>
                </Image>
            </View>
        </TouchableHighlight>
    );
  }
}
/*
<LoadingOverlay icon="9CubeGrid" isVisible={this.state.isVisible} style={{flex: 1,alignSelf: 'center'}}/>
*/

var styles = StyleSheet.create({
  celda: {
    flex: 1,
    height: 280,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    color: '#FFF',
  },
  logo: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    resizeMode: 'cover'
  },
  nestedView: {
    flex:1,
    height: 80,
    marginBottom: 0,
    backgroundColor: '#333',
    opacity: 0.6
  },
  title: {
    marginTop: 8,
    marginLeft: 8,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  duration: {
    textAlign: 'right',
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'white',
    alignItems: 'flex-end'
  },
});
