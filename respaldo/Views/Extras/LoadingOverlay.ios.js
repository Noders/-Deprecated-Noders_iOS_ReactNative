var React = require('react-native');
var Overlay = require('react-native-overlay');
var Blur = require('react-native-blur').BlurView;
var SpinKit = require('react-native-spinkit');  

const {
	Component, ActivityIndicatorIOS, StyleSheet,View
} = React;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})

class LoadingView extends Component {
  constructor(props) {
    super(props);
    
  }
    render(): ReactElement {
        return (
          <Overlay isVisible={this.props.isVisible}>            
            <View style={styles.background}>
              <SpinKit isVisible={this.props.isVisible} size={40} type={this.props.icon} color='#FFFFFF' />
            </View>
          </Overlay>
        );
    }
}

module.exports = LoadingView;