import React, { Component } from 'react';
import { StyleSheet, Button, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  square: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '30%',
    height: 100,
    borderWidth: 3,
  },
});

class GameSquare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 0,
    };
  }

  getStyle() {
    return {
      // flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      width: '30%',
      height: 100,
      borderWidth: 3,
      backgroundColor: this.state.color > 0 ? (this.state.color % 2 === 0 ? 'red' : 'green') : 'white',
    };
  }

  toggle() {
    this.setState(curState => ({
      color: curState.color + 1,
    }));
  }

  render() {
    return <TouchableOpacity style={this.getStyle()} onPress={() => this.toggle()}>
      <Text>{this.state.val}</Text>
    </TouchableOpacity>;
  }
}

export default GameSquare;