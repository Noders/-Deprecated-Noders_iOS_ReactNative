var React = require('react-native');
var Overlay = require('react-native-overlay');
var Blur = require('react-native-blur').BlurView;

const {
	Component, ActivityIndicatorIOS, StyleSheet
} = React;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center'
  },
})

class LoadingView extends Component {
    render(): ReactElement {
    	debugger;
        return (
          <Overlay isVisible={this.props.isVisible}>
            <Blur style={styles.background} blurType="light">
              <ActivityIndicatorIOS
                size="large"
                animating={true}
                style={styles.spinner} />
            </Blur>
          </Overlay>
        );
    }
}

module.exports = LoadingView;