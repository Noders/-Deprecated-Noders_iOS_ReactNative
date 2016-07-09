import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import configureStore from './src/utils/Redux/configureStore';
import { Actions, Scene, Router } from 'react-native-router-flux';

import TopTabBar from './src/components/TabBar/tabBar';
import Medium from './src/views/Medium';
import Podcast from './src/views/Podcast';
import PodcastDetail from './src/views/PodcastDetail';
import Splash from './src/views/Splash';
import Youtube from './src/views/Youtube';
import YoutubeDetail from './src/views/YoutubeDetail';

const __DEBUG__ = true;
const store = configureStore({}, __DEBUG__);
const scenes = Actions.create(
  <Scene hideNavBar key="root" >
    <Scene
      initial
      component={Splash}
      key="splash"
      store={store}
      title="Splash"
      type="replace" />
    <Scene
      component={Podcast}
      key="podcast"
      store={store}
      title="Podcast"
      type="replace" />
    <Scene
      component={PodcastDetail}
      key="podcastDetail"
      store={store}
      title="PodcastDetail"
      type="replace" />
    <Scene
      component={Medium}
      key="medium"
      store={store}
      title="Medium"
      type="replace" />
    <Scene
      component={Youtube}
      key="youtube"
      store={store}
      title="Youtube"
      type="replace" />
    <Scene
      component={YoutubeDetail}
      key="youtubeDetail"
      store={store}
      title="YoutubeDetail"
      type="replace" />
  </Scene>
);

class Noders_iOS_ReactNative extends Component {
  constructor() {
    super();
  }
  render(){
    return (
      <View
        style={styles.container}
      >
        <TopTabBar/>
        <Router hideNavBar scenes={scenes}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('Noders_iOS_ReactNative', () => Noders_iOS_ReactNative);
