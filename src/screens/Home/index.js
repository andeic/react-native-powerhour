import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  superCopy: {
    fontSize: 16,
    textAlign: 'center',
  },
  titleCopy: {
    fontSize: 32,
    textAlign: 'center',
  },
});

class Home extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  render() {
    return <View style={styles.container}>
      <Text style={styles.superCopy}>Welcome to the</Text>
      <Text style={styles.titleCopy}>KG Powerhour game extravaganza!</Text>
    </View>;
  }
}

export default Home;