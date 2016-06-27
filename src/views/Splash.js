import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

class Splash extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../images/noders_logo.png')} />
        <Text style={styles.description}>¿Por qué? Porque nos gusta</Text>
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

export default Splash;
