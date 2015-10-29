'use strict';

var React = require('react-native');
var LoadingOverlay = require('./Extras/LoadingOverlay.ios.js');

var {
    StyleSheet,
    View,
    Text,
    Component,
    ListView
} = React;

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222'
    }
});

class More extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    }

    render() {
        return(
            <View style={styles.container}>
                    <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPodcast.bind(this)}/>                                                        
                    <LoadingOverlay icon="9CubeGrid" isVisible={this.state.isVisible} style={{flex: 1,alignSelf: 'center'}}/>
            </View>
        );
    }

    renderPodcast(row){
        return (<View />);
    }
}

module.exports = More;