import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
});

class Card extends Component {
  constructor(props) {
    super(props);

    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails() {
    this.props.navigation.navigate('CardDetails', { id: this.props.id });
  }

  render() {
    let { name, imageUrl } = this.props;

    return <TouchableOpacity style={styles.container} onPress={this.goToDetails}>
      <Image source={{ uri: imageUrl }}
        style={{ width: 146, height: 204 }} />
    </TouchableOpacity>;
  }
}

export default Card;