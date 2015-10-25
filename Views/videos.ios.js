var React = require('react-native');
var Endpoints = require('../Endpoints.js');
var DetalleVideo = require('./video_detail.ios.js');
var LoadingOverlay = require('./Extras/LoadingOverlay.ios.js');

var {
    Text, View, Component, StyleSheet, ListView, TouchableHighlight, Image, ScrollView, ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,  
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#222',
        padding: 10
    },
    thumbnail: {
        
        height: 280        
    },
    rightContainer: {
        flex: 1 
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        fontFamily: 'Roboto',
        color: '#FFF'
    },
    author: {
        color: '#656565'
    },
    logo: {
        flex: 1,
        height: 280,
    },
    nestedView: {        
        marginTop: 200,
        height: 80,
        flex: 1,        
        backgroundColor: '#333',
        opacity: 0.8        
    },
    title: {
        marginTop: 8,
        marginLeft: 8,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    duration: {
        textAlign: 'right',
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: 'white',
        alignItems: 'flex-end'
    },
    celda: {
        flex: 1,        
        height: 280,
        padding: 10,
        justifyContent: 'center'
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'        
    }
});

class Videos extends Component {

    constructor(props) {
       super(props);
       this.state = {            
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };        
    }

    componentDidMount() {            
        this.fetchData();        
    }

    fetchData() {          
        fetch(Endpoints.videos_endpoint_search)
        .then((response) => response.json())
        .then((responseData) => {            
            var videoArray = "";
            responseData.items.forEach(function(entry){
                if (entry.id.kind === "youtube#video") {
                    videoArray += entry.id.videoId + ",";
                }                
            });             
            var adjustedEndpoint = Endpoints.videos_endpoint.replace('{}',videoArray);
            fetch(adjustedEndpoint).then((response2) => response2.json())
            .then((responseData2) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData2.items),
                    isLoading: false
                });
            }).catch((error) => {
                debugger;
                console.log(error);
            }).done();
        }).done();
    }

    showVideoDetail(video){
        console.log('Video Detail');
        this.props.navigator.push({
            title: 'Detalle Video',
            component: DetalleVideo,
            passProps: {
                selectedVideo: video
            }
        });
    }

    renderVideo(video) {
       return (
            <TouchableHighlight underlayColor='#CCC' onPress={() => {this.showVideoDetail(video)}}>
                <View style={styles.celda}>                                        
                    <Image style={styles.logo} source={{uri: video.snippet.thumbnails.high.url}}>
                        <View style={styles.nestedView}>
                            <Text style={styles.title}>{video.snippet.title}</Text>
                            <Text style={styles.duration}>{this.convert_time(video.contentDetails.duration)}</Text>
                        </View>
                    </Image>                                        
                </View>
            </TouchableHighlight>
        );
    }

    convert_time(duration) {
        return duration.replace("PT","").replace("H",":").replace("M",":").replace("S","");
    }

    render() {
        return(
            <View style={styles.container}>
                <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderVideo.bind(this)}/>                                                        
            </View>            
        );
    }
}



module.exports = Videos;