import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  mb: {
    marginBottom: 8,
  },
});

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  render() {
    return <View style={styles.container}>
      <Text style={styles.mb}>Welcome to the Powerhour example app on iOS!</Text>
      <Text style={styles.mb}>This page is going to be unique to iOS devices. For example, the bottom below this will be different on android.</Text>
      <Button
        style={styles.mb}
        onPress={() => {
          Alert.alert('This is iOS');
        }}
        title='Show alert' />
      <Text>Take a look around.</Text>
    </View>;
  }
}

export default HomeScreen;