var React = require('react-native');

var {
	Component,
	View,
	Image,
	WebView,
	Text,
	ScrollView
} = React;

class VideoDetail extends Component {

	constructor(props){
		super(props);
		debugger;
	}

	render() {
		return(
			<ScrollView>
				<View style={{backgroundColor: '#222', flex: 1}}>
					<Text style={{alignItems:'center'}}>Texto de prueba</Text>
				</View>
			</ScrollView>
		);
	}
}

module.exports = VideoDetail;