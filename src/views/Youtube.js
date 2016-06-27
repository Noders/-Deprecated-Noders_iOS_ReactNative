import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions as videosActions } from '../utils/Redux/modules/videos';
import VideosList from '../components/videosList/videosList';

const mapStateToProps = (state) => ({
  videos : state.videos.videos,
})

class Youtube extends Component {
  static propTypes = {
    videosFetch: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.videosFetch();
  }
  render() {
    return(
      <View style={styles.container}>
        <VideosList videos={this.props.videos} />
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

export default connect(mapStateToProps, videosActions)(Youtube);
