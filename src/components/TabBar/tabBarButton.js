import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

class TabBarButton extends Component {
  constructor() {
    super();
    this.state = {};
  }
  returnButtonLogo(){
    if (this.props.children) {
      return (this.props.children);
    } else {
      return null;
    }
  }
  returnButtonLabel() {
    if (this.props.label) {
      return (<Text> {this.props.label} </Text>);
    } else {
      return null;
    }
  }
  render(){
    return (
      <TouchableHighlight
        {...this.props}
        selected={ this.state.selectedTab === 'home' }
        onPress={() => {
          this.props.onClick()
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          { this.returnButtonLogo() }
          { this.returnButtonLabel() }
        </View>
      </TouchableHighlight>
    )
  }
};

export default TabBarButton;
