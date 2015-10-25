'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Component,
    Image,
    TextInput
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
    },
    txtInput: {
        width: 220,
        height: 35
    }
});

class Home extends Component {
    render() {
        return(
        <View style={styles.container}>
            <Image source={require('image!noders_logo')} />            
            <TextInput placeholder="Texto" style={styles.txtInput}/>
        </View>
        );
    }
}

module.exports = Home;