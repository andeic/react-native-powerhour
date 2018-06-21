import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

class Home extends Component {
  render() {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Game')}
        />
    </View>;
  }
}

export default Home;