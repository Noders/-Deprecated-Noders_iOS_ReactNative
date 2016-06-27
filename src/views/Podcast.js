import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions as podcastActions } from '../utils/Redux/modules/podcasts';
import PodcastsList from '../components/podcastsList/podcastsList';

const mapStateToProps = (state) => {
  return {
    podcasts: state.podcasts.podcasts
  }
}

class Podcast extends Component {
  static propTypes = {
    podcastsFetch: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.podcastsFetch();
  }
  render() {
    return(
      <View style={styles.container}>
        <PodcastsList podcasts={this.props.podcasts} />
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

export default connect(mapStateToProps, podcastActions)(Podcast);
