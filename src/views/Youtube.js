import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions as videosActions } from '../utils/Redux/modules/videos';

const mapStateToProps = (state) => {
  console.log(state);
  debugger;
  return {};
};

class Youtube extends Component {
  componentDidMount(){
    console.log(this.props);
    debugger;
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.description}> YOUTUBE </Text>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222'
  }
});

export default connect(mapStateToProps, videosActions)(Youtube);
