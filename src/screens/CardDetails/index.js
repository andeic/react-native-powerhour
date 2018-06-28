import React, { Component } from 'react';
import { StyleSheet, Button, Text, View, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native';

import { getCardDetails } from '../../api/scryfall';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  textLine: {
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
});

class TextLine extends Component {
  render() {
    return <Text style={styles.textLine}>
      <Text style={{ fontWeight: 'bold' }}>{this.props.title} </Text>
      <Text>{this.props.copy}</Text>
    </Text>;
  }
}

class CardDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Card Details'),
      tabBarVisible: false,
    };
  };

  state = {
    card: undefined,
    loading: true,
    width: 320,
    height: 446,
  };

  resizeImage(event) {
    let { width } = Dimensions.get('window');

    width = width - 32;

    let height = Math.round(width * 1.39375);

    this.setState({
      width,
      height,
    });
  }

  componentDidMount() {
    getCardDetails(this.props.navigation.getParam('id')).then(resp => {
      this.setState({
        card: resp,
        loading: false,
      });
    });
  }

  render() {
    let { card, loading, width, height } = this.state;

    if (loading) {
      return <ActivityIndicator size="large"
        color="#5b0591"
        style={styles.loader} />;
    }

    return <ScrollView style={styles.container}>
      <Image source={{ uri: card.image_uris.normal }}
        style={{ width: width, height: height, marginBottom: 16 }}
        onLayout={e => this.resizeImage(e)} />

      <Text style={styles.title}>Card Details</Text>

      <TextLine title={'Set:'} copy={card.set_name} />
      <TextLine title={'Collector Number:'} copy={card.collector_number} />
      <TextLine title={'Rarity:'} copy={card.rarity} />
      <TextLine title={'Price:'} copy={`$${card.usd}`} />
      <TextLine title={'Artist:'} copy={card.artist} />
      <TextLine title={'Reserved List:'} copy={card.reserved ? 'Yes' : 'No'} />

      <Text style={styles.title}>Oracle Text</Text>
      <Text style={{ marginBottom: 32 }}>{card.oracle_text}</Text>
      {/* card.legalities */}
    </ScrollView>;
  }
}

export default CardDetailsScreen;