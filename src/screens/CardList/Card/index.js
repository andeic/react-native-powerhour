import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';

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
  constructor(props) {
    super(props);

    this.setLoaded = this.setLoaded.bind(this);
    this.goToDetails = this.goToDetails.bind(this);
    this.resizeImage = this.resizeImage.bind(this);
  }

  state = {
    loading: true,
    width: 0,
    height: 0,
  };

  goToDetails() {
    let { navigation, id, name } = this.props;

    navigation.navigate('CardDetails', { id: id, name: name });
  }

  setLoaded() {
    this.setState({
      loading: false,
    });
  }

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