'use strict';

var React = require('react-native');
var LoadingOverlay = require('./Extras/LoadingOverlay.ios.js');
var Endpoint = require('../Endpoints.js');
var JSXMLParser = require('NativeModules').JSXMLParser;
var JSScreenManager = require('NativeModules').JSScreenManager;
var PodcastRow = require('./Extras/PodcastRow.js');

var {
    StyleSheet,
    View,
    Text,
    Component,
    ListView,
    TouchableOpacity,
    Image
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
        backgroundColor: '#222',        
    },
    podRow:{
        height: 100,
        
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row'
    },
    titleText: {
        color: '#FFF'        
    },
    titleWrapper: {
        flex: 1,   
        backgroundColor: '#123'
        
    },
    playBtn: {
        height: 40,
        width: 40,
        flex: 0.2
    }
});
var rowWidth = 0;
var rowCount = 0;
class More extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),

        };    
        JSScreenManager.getScreenWidth(function(width){            
            rowWidth = width;
        });    
    }

    componentDidMount(){
        var blockThis = this;
        fetch(Endpoint.podcast_endpoint)
        .then((response) => {            
            JSXMLParser.parseXMLString(response._bodyText, function(parsedJSON){                
                blockThis.setState({
                    dataSource: blockThis.state.dataSource.cloneWithRows(parsedJSON)
                })
            });
        })
        .done();
    }

    render() {
        return(
            <View style={styles.container}>
                    <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPodcast.bind(this)} style={{paddingBottom: 30}}/>                                                        
                    <LoadingOverlay icon="9CubeGrid" isVisible={this.state.isVisible} style={{flex: 1,alignSelf: 'center'}}/>
            </View>
        );
    }

    renderPodcast(row){
        rowCount++;
        return (            
            <PodcastRow tag={rowCount} image="playcircle" podTitle={row.title} width={rowWidth} url={row.enclosure}/>
        );
    }

    _playPodcast(pod){

    }
}

module.exports = More;