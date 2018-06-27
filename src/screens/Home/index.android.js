import React, { Component } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  mb: {
    marginBottom: 16,
  },
});

class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Home',
  };

  state = {
    visible: true,
  };

  render() {
    return <View style={styles.container}>
      {this.state.visible ? <View>
        <Text style={styles.mb}>Welcome to the Powerhour example app on Android! The superior mobile OS!</Text>
        <Text style={styles.mb}>This page is going to be unique to Android, the text and styles will all be different.</Text>
        <Text style={styles.mb}>For example, this button will render differently do something different than on iOS.</Text>
      </View> : null}

      <Button
        onPress={() => {
          this.setState(prevState => ({
            visible: !prevState.visible,
          }));
        }}
        title='Toggle visibility' />
    </View>;
  }
}

export default HomeScreen;