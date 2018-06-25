import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

class CardDetailsScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Details',
    tabBarVisible: false,
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

export default CardDetailsScreen;