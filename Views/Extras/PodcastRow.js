var React = require('react-native');
var EventEmitter = require('EventEmitter');
var Subscribable = require('Subscribable');

var {
	JSAudioPlayer
} = require('NativeModules');

var {
	View,
	Image,
	Text,
	TouchableOpacity,
	StyleSheet,
	Component
} = React;

var styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 90,
		borderBottomWidth: 1,
		borderBottomColor: '#444',
		alignItems: 'center',
	},
	img: {
		height: 30,
		width: 30,
		marginLeft: 10
	},
	textWrapper: {
		flex: 1,
		marginLeft: 10,
		marginTop: 15,
		marginRight: 10
	},
	txt: {
		color: '#FFF'
	}
});

var PodcastRow = React.createClass({	

	mixins: [Subscribable.Mixin],
	componentWillMount: function(){
		this.eventEmitter = new EventEmitter();
	},
	componentDidMount: function(){
		this.addListenerOn(this.eventEmitter, 'playChanged', this._playbackFix);
	},
	getInitialState: function() {	
		return {
			isPlaying: false,
			playImage: 'playcircle'
		};		
	},

	_playbackFix: function (tag){
		if (tag != this.props.tag && this.state.playImage == 'pausecircle') {
			this.setState({
				isPlaying: false,
				playImage: 'playcircle'
			});
		}
	},

	_playAudio: function() {
		var blockThis = this;	
		this.eventEmitter.emit('playChanged', this.props.tag);
		if (!this.state.isPlaying) {
			JSAudioPlayer.play(this.props.url, true, function(error){
				if (error) {
					alert(error);
				} else {
					blockThis.setState({
						isPlaying: true,
						playImage: 'pausecircle'						
					})
				}
			});
		} else {
			JSAudioPlayer.pauseCurrent();
			blockThis.setState({
				isPlaying: false,
				playImage: 'playcircle'				
			});
		}		
		console.log(this.state);
	},

	render: function() {
		var images = {
			playcircle: require('image!playcircle'),
			pausecircle: require('image!pausecircle')
		}
		return (
			<View style={[styles.container, {width: this.props.width - 10}]}>
				<TouchableOpacity onPress={this._playAudio}>
					<Image key={images[this.state.playImage].uri} source={{uri: images[this.state.playImage].uri}} style={styles.img} />
				</TouchableOpacity>
				<View style={styles.textWrapper}>
					<Text style={styles.txt}>{this.props.podTitle}</Text>
				</View>
			</View>
		);
	}
});

module.exports = PodcastRow;