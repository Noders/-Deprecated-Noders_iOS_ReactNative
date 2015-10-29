'use strict';

var React = require('react-native');
var Podcast = require('../Views/podcast.ios.js');

var {
	NavigatorIOS,
	Component
} = React;

class NavigatorPodcast extends Component {
	constructor(props){
		super(props);
		this.state = {
			initialTitle: 'Podcasts'
		};		
	}
	render() {
		return (
			<NavigatorIOS initialRoute={{
				component: Videos,
				title: this.state.initialTitle
				
			}} barTintColor='#000' tintColor='#1ec503' titleTextColor='#FFF' style={{flex: 1}} navigationBarHidden={false}/>
		)
	}
}

module.exports = NavigatorPodcast;