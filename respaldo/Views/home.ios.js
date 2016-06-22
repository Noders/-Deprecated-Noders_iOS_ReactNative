'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Component,
    Image
} = React;

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Titillium Web'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222'
    }
});

class Home extends Component {
    render() {
        return(
        <View style={styles.container}>
            <Image source={require('image!noders_logo')} />
            <Text style={styles.description}>¿Por qué? Porque nos gusta</Text>
        </View>
        );
    }
}

module.exports = Home;