import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import configureStore from './src/utils/Redux/configureStore';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Splash from './src/views/Splash';
/*
import Menu from './src/views/Menu';
import Tickets from './src/views/Tickets';
import Home from './src/views/Home';
import Venue from './src/views/Venue';
import Notifications from './src/utils/Notifications';

<Scene component={Home} direction="horizontal" key="home" store={store} title="Locales" type="replace"/>
<Scene component={Venue} direction="horizontal" key="venue" store={store} />
<Scene component={Tickets} direction="vertical" key="tickets" store={store} />
<Scene component={Menu} direction="vertical" key="menu" store={store} />
<Notifications store={store}/>
*/

const __DEBUG__ = true;
const store = configureStore({}, __DEBUG__);
const scenes = Actions.create(
  <Scene hideNavBar key="root" >
    <Scene component={Splash} initial key="splash" store={store} title="Splash" type="replace" />
  </Scene>
);

class Noders_iOS_ReactNative extends React.Component {
  render(){
    return (
      <View
          style={{
            top:0,
            left:0,
            right:0,
            bottom:0,
            position: 'absolute',
          }}
      >
        <Router hideNavBar scenes={scenes}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Noders_iOS_ReactNative', () => Noders_iOS_ReactNative);
