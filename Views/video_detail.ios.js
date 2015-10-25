var React = require('react-native');
var ShareManagerIOS = require('NativeModules').ShareManagerIOS;

var {
	Component,
	View,
	Image,
	WebView,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity
} = React;

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#222',
		flex: 1
	},
	scrollviewWrapper: {
		flex: 1,
		backgroundColor: '#222'
	},
	thumbnail: {
		height: 280,
		flex: 1
	},
	videoTitle: {
		alignItems:'center',
		color: '#FFF',
		marginLeft: 15,
		marginTop: 10,
		fontFamily: 'Titillium Web',
		fontSize: 16,
		fontWeight: 'bold'	
	},
	descriptionText: {
		color: '#FFF',
		marginLeft: 30,
		marginTop: 10
	},
	sharelogo: {
		width: 30,
		height: 30,
		marginRight: 10		
	},
	buttonsContainer: {
		position: 'absolute',
		right: 0,
		bottom: 55,
		backgroundColor: 'transparent',
		flexDirection: 'row'
	},
	button: {
		borderRadius: 15,
		flex: 1,
		marginBottom: 5
	}
});

class VideoDetail extends Component {

	constructor(props){
		super(props);	
		debugger;	
	}

	render() {
		return(
			<View style={{flex: 1}}>
				<ScrollView style={styles.scrollviewWrapper}>
					<View style={styles.container}>
						<Image style={styles.thumbnail} source={{uri: this.props.selectedVideo.snippet.thumbnails.high.url}} />
						<Text style={styles.videoTitle}>{this.props.selectedVideo.snippet.title}</Text>
						<Text style={styles.descriptionText}>{this.props.selectedVideo.snippet.description}</Text>										
					</View>				
				</ScrollView>
				<View style={styles.buttonsContainer}>
					<TouchableOpacity onPress={() => {}} style={styles.button}>
						<Image style={styles.sharelogo} source={{uri: 'facebooklogo'}} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {}} style={styles.button}>
						<Image style={styles.sharelogo} source={{uri: 'twitterlogo'}} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {ShareManagerIOS.shareWithWhatsapp("http://fakelinknodersyoutube", function() {})}} style={styles.button}>
						<Image style={styles.sharelogo} source={{uri: 'whatsapplogo'}} />
					</TouchableOpacity>
				</View>	
			</View>
		);
	}
}

module.exports = VideoDetail;