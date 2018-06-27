import React, { Component } from 'react';
import { StyleSheet, View, Text, PanResponder } from 'react-native';

import PressBox from './PressBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  panResponder: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'powderblue',
    margin: 30,
  },
});

class Gestures extends Component {
  static navigationOptions = {
    headerTitle: 'Gesture Examples',
  };

  constructor(props) {
    super(props);

    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
        this.setState({
          gesture: 'Touch',
          gestureStateX: gestureState.dx,
          gestureStateY: gestureState.dy,
        });
      },
      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
        this.setState({
          gesture: 'Moving',
          gestureStateX: gestureState.dx,
          gestureStateY: gestureState.dy,
        });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
        this.setState({
          gesture: 'Ended',
          gestureStateX: 0,
          gestureStateY: 0,
        });
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  state = {
    gesture: undefined,
    gestureStateX: 0,
    gestureStateY: 0,
  };

  render() {
    return <View style={styles.container}>
      <PressBox />

      <View {...this._panResponder.panHandlers} style={styles.panResponder} />

      <Text>{this.state.gesture}</Text>
      <Text>{this.state.gestureStateX.toFixed(2)}, {this.state.gestureStateY.toFixed(2)}</Text>
    </View>;
  }
}

export default Gestures;