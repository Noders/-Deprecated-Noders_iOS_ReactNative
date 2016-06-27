import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet, View, TouchableHighlight, Image } from 'react-native';

export default class videosListItem extends Component{
  showVideoDetail(video){
    console.log(video);
  }
  convert_time(duration) {
      return duration.replace("PT","").replace("H",":").replace("M",":").replace("S","");
  }
  render() {
    const {video} = this.props;
    return(
      <TouchableHighlight underlayColor='#efefef' onPress={() => {this.showVideoDetail(video)}}>
        <View style={styles.celda}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={{uri: video.snippet.thumbnails.medium.url}}>
            </Image>
          </View>
          <View style={styles.nestedView}>
            <Text style={styles.title}>{video.snippet.title}</Text>
            <Text style={styles.duration}>{this.convert_time(video.contentDetails.duration)}</Text>
          </View>
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
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    color: '#FFF',
  },
  logoContainer: {
    height: 100,
    width: 100,
  },
  logo: {
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    resizeMode: 'cover'
  },
  nestedView: {
    flex:1,
    height: 80,
    marginBottom: 0,
    opacity: 0.6
  },
  title: {
    marginTop: 8,
    marginLeft: 8,
    color: 'black',
    fontSize: 14,
    paddingRight: 40,
    fontWeight: 'bold',
  },
  duration: {
    textAlign: 'right',
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: 'black',
    alignItems: 'flex-end'
  },
});
