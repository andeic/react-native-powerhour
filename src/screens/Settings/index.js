import React, { Component } from 'react';
import { StyleSheet, Platform, Button, Image, View, TextInput } from 'react-native';
import SideMenu from 'react-native-side-menu';
import { FileSystem } from 'expo';

import Menu from './Menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    ...Platform.select({
      ios: {
        backgroundColor: '#f2f2f2',
      },
      android: {
        backgroundColor: '#e2e2e2',
      },
    }),
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 2,
    height: 40,
    paddingHorizontal: 8,
    width: '80%',
    marginBottom: 16,
    backgroundColor: 'white',
  },
});

class SettingsScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Settings',
  };

  state = {
    isOpen: false,
  };

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  save() {

  }

  render() {
    return <SideMenu menu={<Menu />}
      isOpen={this.state.isOpen}
      onChange={isOpen => this.updateMenuState(isOpen)}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={''}
          onChangeText={(text) => this.setState({ name: text })} />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={''}
          keyboardType={'email-address'}
          onChangeText={(text) => this.setState({ email: text })} />

        <Image source={{ uri: `${FileSystem.documentDirectory}photos/PH_photo_1.jpg` }} style={{ width: 200, height: 200, marginBottom: 24 }} />

        <View style={{ marginBottom: 24 }}>
          <Button onPress={() => this.props.navigation.navigate('Camera')} title='Open camera' />
        </View>

        <Button onPress={() => this.save()} title='Save settings' />
      </View>
    </SideMenu>;
  }
}

export default SettingsScreen;