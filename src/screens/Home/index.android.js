import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, StatusBar, DrawerLayoutAndroid } from 'react-native';

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
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
      </View>
    );


    return <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <View style={styles.container}>
        <StatusBar backgroundColor="red" />

        {this.state.visible ? <View>
          <Text style={styles.mb}>Welcome to the Powerhour example app on Android! The superior mobile OS!</Text>
          <Text style={styles.mb}>This page is going to be unique to Android, the text and styles will all be different.</Text>
          <Text style={styles.mb}>For example, this button will render differently do something different than on iOS.</Text>
          <Text style={styles.mb}>You may also notice the status bar is different.</Text>
        </View> : null}

        <Button
          onPress={() => {
            this.setState(prevState => ({
              visible: !prevState.visible,
            }));
          }}
          title='Toggle visibility' />
      </View>
    </DrawerLayoutAndroid>;
  }
}

export default HomeScreen;