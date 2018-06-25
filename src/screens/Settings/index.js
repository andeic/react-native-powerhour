import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

class SettingsScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Settings',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>

      </View>
    );
  }
}

export default SettingsScreen;