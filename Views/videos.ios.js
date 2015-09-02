var React = require('react-native');
var Endpoints = require('../Endpoints.js');

var {
    Text, View, Component, StyleSheet, ListView, TouchableHighlight, Image, ScrollView
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,  
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#222',
        padding: 10,
        height: 300
    },
    thumbnail: {
        
        height: 300        
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
        height: 300,
        padding: 10,
        justifyContent: 'center'
    }
});

class Videos extends Component {

    constructor(props) {
       super(props);
       this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {            
        this.fetchData();        
    }

    fetchData() {  
        debugger;
        fetch(Endpoints.videos_endpoint_search)
        .then((response) => response.json())
        .then((responseData) => {
            var shiftedArray = responseData.items.shift();
            var videoArray = "";
            responseData.items.forEach(function(entry){
                videoArray += entry.id.videoId + ",";
            }); 
            videoArray.slice(0, -1);
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

    showVideoDetail(){
        console.log('Video Detail');
    }

    renderBook(book) {
       return (
            <TouchableHighlight underlayColor='#CCC' onPress={this.showVideoDetail}>
                <View style={styles.celda}>                                        
                    <Image style={styles.logo} source={{uri: book.snippet.thumbnails.high.url}}>
                        <View style={styles.nestedView}>
                            <Text style={styles.title}>{book.snippet.title}</Text>
                            <Text style={styles.duration}>{this.convert_time(book.contentDetails.duration)}</Text>
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
                renderRow={this.renderBook.bind(this)}/>
            </View>
            
        );
    }
}

module.exports = Videos;