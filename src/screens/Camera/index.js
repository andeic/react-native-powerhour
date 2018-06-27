import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, CameraRoll } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';

class CameraScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Cheese!',
  };

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async getPermissionCamera() {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);

    return status;
  }

  async getPermissionCameraRoll() {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);

    return status;
  }

  async componentDidMount() {
    let statusCam = await this.getPermissionCamera();
    let statusRoll = await this.getPermissionCameraRoll();

    this.setState({ hasCameraPermission: statusCam === 'granted' && statusRoll === 'granted' });
  }

  async takePicture() {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();

      CameraRoll.saveToCameraRoll(photo.uri);

      let info = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'photos/');

      if (!info.exists) {
        await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos/');
      }

      FileSystem.moveAsync({
        from: photo.uri,
        to: `${FileSystem.documentDirectory}photos/PH_photo_1.jpg`,
      });
    }
  };

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => this.camera = ref}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => this.takePicture()}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Take Photo{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

export default CameraScreen;