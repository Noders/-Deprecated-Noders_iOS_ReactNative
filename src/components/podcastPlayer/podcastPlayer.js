import React, { Component, PropTypes } from 'react';
import { AlertIOS, AppRegistry, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';
import Fontawesomeicons from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';
import RNFetchBlob from 'react-native-fetch-blob'
const FS = RNFetchBlob.fs;
Sound.enableInSilenceMode(true);

export default class podcastPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      playing: false,
      saved: false
    };
  }

  loadAudio() {
    return FS.exists(this.state.filePath)
      .then((data) => {
        return new Promise((resolve, reject) => {
          if (data) {
            const audio = new Sound(this.state.filePath, '', (error) => {
              if (error) {
                reject('failed to load the sound', error)
              } else {
                this.setState({Audio: audio}, () => {
                  resolve();
                })
              }
            });
          } else {
            this.downloadAudio(this.state.podcast.enclosure.$, this.playAudio)
          }
        })
      })
  }
  playAudio() {
    this.loadAudio().then(() => {
      if (!this.state.playing && this.state.Audio) {
        this.setState({
          playing: true
        }, () => {
          this.state.Audio.play();
        });
      }
    })
  }
  downloadAudio({url}, cb) {
    RNFetchBlob
      .config({
        fileCache : true,
        path: this.state.filePath
      })
      .fetch('GET', url)
      .progress((received, total) => {
        const progress = (received / total)  * 100;
        this.setState({progress});
      })
      .then((res) => {
        console.log('The file saved to ', res.path())
        console.log(res);
        this.setState({file: true, filePath: res.path()})
        if (typeof cb === 'function') {
          cb()
        }
      })

  }
  pauseAudio() {
    if (this.state.playing && this.state.Audio) {
      this.setState({
        playing: false
      }, () => {
        this.state.Audio.pause();
      });
    }
  }
  componentWillMount() {
    const { podcast } = this.props;
    const filePath = FS.dirs.DocumentDir + '/' + podcast.enclosure.$.url.split('/').pop();
    this.setState({podcast, filePath});
  }
  componentDidMount(){
    FS.exists(this.state.filePath)
      .then((data) => {
        if (data) {
          this.setState({saved: true})
        }
      })
  }
  render() {
    const { podcast, saved } = this.state;
    const status = () => {
      if (!saved) {
        return (<Text>Percentage {this.state.progress} %</Text>)
      } else {
        return (<Text> Downloaded! </Text>)
      }
    }
    return (
        <View style={styles.container}>
            <Text>{podcast.title}</Text>
            <Text>{podcast.newPubDate}</Text>
            <Text>{podcast['itunes:duration']}</Text>
            { status() }
            <View style={styles.subContainer}>
                <TouchableHighlight
                    onPress={() => {
                      this.playAudio()
                    }}
                >
                    <Fontawesomeicons
                        name="play"
                        size={ 30 }
                        color="black"
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                      this.pauseAudio()
                    }}
                >
                    <Fontawesomeicons
                        name="pause"
                        size={ 30 }
                        color="black"
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => {
                      this.downloadAudio(this.state.podcast.enclosure.$)
                    }}
                >
                    <Fontawesomeicons
                        name="arrow-circle-o-down"
                        size={ 30 }
                        color="black"
                    />
                </TouchableHighlight>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
