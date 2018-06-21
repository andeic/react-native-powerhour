import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

class Game extends Component {
  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Details... again"
      onPress={() => this.props.navigation.push('Game')}
    />
    <Button
      title="Go to Home"
      onPress={() => this.props.navigation.navigate('Home')}
    />
    <Button
      title="Go back"
      onPress={() => this.props.navigation.goBack()}
    />
  </View>;
  }
}

export default Game;