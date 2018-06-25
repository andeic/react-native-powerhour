import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import GameSquare from './GameSquare';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class GameBoard extends Component {
  render() {
    return <View style={styles.container}>
      <GameSquare />
      <GameSquare />
      <GameSquare />
      <GameSquare />
      <GameSquare />
      <GameSquare />
      <GameSquare />
      <GameSquare />
      <GameSquare />
    </View>;
  }
}

export default GameBoard;