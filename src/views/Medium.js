import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { actions as mediumActions } from '../utils/Redux/modules/medium';

const mapStateToProps = (state) => {
  return {
    medium: state.medium.medium
  }
}

class Medium extends Component {
  static propTypes = {
    mediumFetch: PropTypes.func.isRequired,
  };

  componentDidMount(){
    this.props.mediumFetch();
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.description}> MEDIUM </Text>
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

export default Medium;
export default connect(mapStateToProps, mediumActions)(Medium);
