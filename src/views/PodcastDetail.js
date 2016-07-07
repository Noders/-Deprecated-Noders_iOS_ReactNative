import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PodcastPlayer from '../components/podcastPlayer/podcastPlayer';

class PodcastDetail extends Component {
  componentDidMount(){
  }
  render() {
    return(
        <View style={styles.container}>
            <PodcastPlayer podcast={this.props.podcast} />
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

export default PodcastDetail;
