import React, { Component } from 'react';
import { StyleSheet, Platform, Button, Image, View, TextInput, AsyncStorage } from 'react-native';
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

  async saveInfo() {
    try {
      AsyncStorage.setItem('PH_NAME', this.state.name);
      AsyncStorage.setItem('PH_EMAIL', this.state.email);
    } catch (error) {
      console.error('Error saving data');
    }
  }

  async getInfo() {
    try {
      const name = await AsyncStorage.getItem('PH_NAME');
      const email = await AsyncStorage.getItem('PH_EMAIL');

      this.setState({
        name,
        email,
      });
    } catch (error) {
      console.error('Error retrieving data');
    }
  }

  componentDidMount() {
    this.getInfo();
  }

  render() {
    return <SideMenu menu={<Menu />}
      isOpen={this.state.isOpen}
      onChange={isOpen => this.updateMenuState(isOpen)}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })} />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          keyboardType={'email-address'}
          onChangeText={(text) => this.setState({ email: text })} />

        <Image source={{ uri: `${FileSystem.documentDirectory}photos/PH_photo_1.jpg` }} style={{ width: 200, height: 200, marginBottom: 24 }} />

        <View style={{ marginBottom: 24 }}>
          <Button onPress={() => this.props.navigation.navigate('Camera')} title='Open camera' />
        </View>

        <Button onPress={() => this.saveInfo()} title='Save settings' />
      </View>
    </SideMenu>;
  }
}

export default SettingsScreen;