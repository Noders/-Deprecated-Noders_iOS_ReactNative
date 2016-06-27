/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Home = require('./Views/home.ios.js');
var Podcast = require('./Views/podcast.ios.js');
var VideosNav = require('./Navigators/NavigatorVideos.ios.js');

var {
    AppRegistry,
    TabBarIOS,
    Component,
    StyleSheet
} = React;

var styles = StyleSheet.create({
    tab: {
        backgroundColor: '#222'
    }
});

class NodersApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    
    render() {
        return(
            <TabBarIOS
                style={styles.tab}
                selectedTab={this.state.selectedTab}
                barTintColor='#000'
                tintColor='#1ec503'>
                <TabBarIOS.Item
                    title='Inicio'
                    selected={this.state.selectedTab === 'home'}
                    icon={{uri:require('image!home')}}                       
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home'
                        });
                    }}>
                <Home />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='Videos'
                    selected={this.state.selectedTab === 'videos'}
                    icon={{uri:require('image!videos')}}                        
                    onPress={() => {
                        this.setState({
                            selectedTab: 'videos'
                        });
                    }}>
                <VideosNav />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='Podcast'
                    selected={this.state.selectedTab === 'podcast'}
                    icon={{uri:require('image!podcast')}}                         
                    onPress={() => {
                        this.setState({
                            selectedTab: 'podcast'
                        });
                    }}>
                <Podcast />
                </TabBarIOS.Item>                    
            </TabBarIOS>
        )
    }
}

AppRegistry.registerComponent('NodersApp', () => NodersApp);
