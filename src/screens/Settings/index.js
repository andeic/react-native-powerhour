import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

class SettingsScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}

export default SettingsScreen;