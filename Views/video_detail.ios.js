var React = require('react-native');

var {
	Component,
	View,
	Image,
	WebView,
	Text,
	ScrollView,
	StyleSheet
} = React;

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#222',
		flex: 1
	},
	scrollviewWrapper: {
		flex: 1
	}
});

class VideoDetail extends Component {

	constructor(props){
		super(props);
		debugger;
	}

	render() {
		return(
			<ScrollView style={styles.scrollviewWrapper}>
				<View style={styles.container}>
					<Text style={{alignItems:'center'}}>Texto de prueba</Text>
				</View>
			</ScrollView>
		);
	}
}

module.exports = VideoDetail;