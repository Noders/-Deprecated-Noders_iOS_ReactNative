import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class podcastssListItem extends Component{
  showDetails(podcast){
    Actions.podcastDetail({podcast})
  }
  render() {
    const { podcast } = this.props;
    return(
        <TouchableHighlight underlayColor='#efefef' onPress={() => {this.showDetails(podcast)}}>
            <View style={styles.celda}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{podcast.title}</Text>
                </View>
                <View style={styles.downRow}>
                    <Text style={styles.duration}>{podcast.newPubDate}</Text>
                    <Text style={styles.duration}>{podcast['itunes:duration']}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
  }
}

var styles = StyleSheet.create({
  celda: {
    flex: 1,
    height: 100,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  titleWrapper: {
    flex: 1,
    padding:10,
  },
  title: {
    fontSize: 25,
    marginBottom: 8,
    color: '#FFF',
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  duration: {
    textAlign: 'right',
    color: 'black',
    alignItems: 'flex-end'
  },
  downRow: {
    padding:10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});
