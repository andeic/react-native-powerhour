import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, ScrollView, Dimensions } from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#f8effc',
    padding: 16,
  },
  close: {
    fontSize: 18,
    marginBottom: 32,
  },
  text: {
    fontSize: 16,
    paddingVertical: 16,
  },
});

class Menu extends Component {
  render() {
    return <ScrollView style={styles.drawer}>
      {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i =>
        <Text key={i} style={styles.text}>Menu Item {i}</Text>
      )}
    </ScrollView>;
  }
}

export default Menu;