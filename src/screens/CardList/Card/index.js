import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import autobind from 'autobind-decorator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  loader: {
    position: 'absolute',
    top: '50%',
  },
});

class Card extends Component {

  state = {
    loading: true,
    width: 0,
    height: 0,
  };

  @autobind
  goToDetails() {
    let { navigation, id, name } = this.props;

    navigation.navigate('CardDetails', { id: id, name: name });
  }

  @autobind
  setLoaded() {
    this.setState({
      loading: false,
    });
  }

  @autobind
  resizeImage(event) {
    let { width } = event.nativeEvent.layout;

    width -= 16;

    let height = Math.round(width * 1.39375);

    this.setState({
      width,
      height,
    });
  }

  render() {
    let { name, imageUrl } = this.props;

    return <TouchableOpacity style={styles.container} onPress={this.goToDetails} onLayout={this.resizeImage}>
      {this.state.loading ?
        <ActivityIndicator size="small"
          color="#5b0591"
          style={styles.loader} /> : null}

      <Image source={{ uri: imageUrl }}
        style={{ width: this.state.width, height: this.state.height }}
        onLoad={this.setLoaded} />
    </TouchableOpacity>;
  }
}

export default Card;