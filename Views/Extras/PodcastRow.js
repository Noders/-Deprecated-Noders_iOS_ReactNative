var React = require('react-native');

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

class PodcastRow extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
			playImage: 'playcircle',
			widthPlay: 30,
			widthPause: 0
		}		
	}

	_playAudio() {
		var blockThis = this;
		debugger;
		if (!this.state.isPlaying) {
			JSAudioPlayer.play(this.props.url, true, function(error){
				if (error) {
					alert(error);
				} else {
					blockThis.setState({
						isPlaying: true,
						playImage: 'pausecircle',
						widthPlay: 0,
						widthPause: 30
					})
				}
			});
		} else {
			JSAudioPlayer.pauseCurrent();
			blockThis.setState({
				isPlaying: false,
				playImage: 'playcircle',
				widthPlay: 30,
				widthPause: 0
			});
		}		
	}

	render() {
		var images = {
			playcircle: require('image!playcircle'),
			pausecircle: require('image!pausecircle')
		}
		return (
			<View style={[styles.container, {width: this.props.width - 10}]}>
				<TouchableOpacity onPress={this._playAudio.bind(this)}>
					<Image source={require('image!playcircle')} style={{width: this.state.widthPlay, height: this.state.widthPlay, marginLeft: 10}} />
					<Image source={require('image!pausecircle')} style={{width: this.state.widthPause, height: this.state.widthPause, marginLeft: 10}} />
				</TouchableOpacity>
				<View style={styles.textWrapper}>
					<Text style={styles.txt}>{this.props.podTitle}</Text>
				</View>
			</View>
		);
	}
}

module.exports = PodcastRow;