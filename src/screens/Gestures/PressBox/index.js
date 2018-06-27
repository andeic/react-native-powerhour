import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import {
  LongPressGestureHandler,
  // ScrollView,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});

class PressBox extends Component {
  doubleTapRef = React.createRef();

  _onHandlerStateChange = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert("I'm being pressed for so long");
    }
  };

  _onSingleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert("I'm touched");
    }
  };

  _onDoubleTap = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      Alert.alert('Double tap!');
    }
  };

  render() {
    return <LongPressGestureHandler
      onHandlerStateChange={this._onHandlerStateChange}
      minDurationMs={600}>
      <TapGestureHandler
        onHandlerStateChange={this._onSingleTap}
        waitFor={this.doubleTapRef}>
        <TapGestureHandler
          ref={this.doubleTapRef}
          onHandlerStateChange={this._onDoubleTap}
          numberOfTaps={2}>
          <View style={styles.box} />
        </TapGestureHandler>
      </TapGestureHandler>
    </LongPressGestureHandler>;
  }
}

export default PressBox;