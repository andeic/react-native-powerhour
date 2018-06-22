import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Platform } from 'react-native';
import GameBoard from '/components/GameBoard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 16,
  },
});

class Game extends Component {
  static navigationOptions = {
    title: 'Game',
  };

  render() {
    return <View style={styles.container}>
      <Text style={styles.title}>Color Flippity</Text>
      <GameBoard />
    </View>;
  }
}

export default Game;