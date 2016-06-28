import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import VideoPreview from '../components/videoPreview/videoPreview';
import { fetchVideoData } from '../utils/api/videos';

class YoutubeDetail extends Component {
  componentDidMount(){
    fetchVideoData(this.props.video)
  }
  render() {
    console.log(this.props)
    return(
      <View style={styles.container}>
        <VideoPreview video={this.props.video} />
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});

export default YoutubeDetail;
