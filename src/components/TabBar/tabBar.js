import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Fontawesomeicons from 'react-native-vector-icons/FontAwesome';

import TabBarButton from './tabBarButton';

class CustomTabBar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return (
        <View style={styles.toolbar}>
            <TabBarButton
                style={styles.tabBarButton}
                activeOpacity={0.5}
                underlayColor={'#78b14c'}
                onClick={() => {
                  Actions.youtube();
                }}
            >
                <Fontawesomeicons
                    name="youtube"
                    size={ 30 }
                    color="#fafafa"
                />
            </TabBarButton>
        {
          /*
            <TabBarButton
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  paddingTop: 25,
                  paddingBottom: 10,
                }}
                activeOpacity={0.5}
                underlayColor={'#78b14c'}
                onClick={() => {
                  Actions.medium();
                }}
            >
                <Fontawesomeicons
                    name="medium"
                    size={ 30 }
                    color="#fafafa"
                />
            </TabBarButton>
          */
        }
            <TabBarButton
                style={styles.tabBarButton}
                activeOpacity={0.5}
                underlayColor={'#78b14c'}
                onClick={() => {
                  Actions.podcast();
                }}
            >
                <Fontawesomeicons
                    name="microphone"
                    size={ 30 }
                    color="#fafafa"
                />
            </TabBarButton>
        </View>
    )
  }
};

const styles = StyleSheet.create({
  toolbar:{
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#81c04d',
    borderBottomColor: '#d9d9d9',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-around',
  },
  tabBarButton: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 25,
    paddingBottom: 10,
  }
});

export default CustomTabBar;
