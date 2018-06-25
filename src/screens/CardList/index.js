import React, { Component } from 'react';
import { StyleSheet, Button, Text, ScrollView, FlatList, View } from 'react-native';

import Card from './Card';
import { getCardList } from '/api/scryfall';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

class CardListScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Card List',
  };

  state = {
    rarity: 'rare',
    set: 'zen',
    cards: [],
  };

  renderCard({ item }) {
    return <Card name={item.name} imageUrl={item.image_uris.normal} id={item.id} />;
  }

  componentDidMount() {
    getCardList(this.state.set, this.state.rarity).then(resp => {
      this.setState({
        cards: resp,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Showing {this.state.rarity}s from {this.state.set}</Text>

        <FlatList
          horizontal={false}
          numColumns={2}
          data={this.state.cards}
          keyExtractor={card => card.id}
          renderItem={this.renderCard} />
      </View>
    );
  }
}

export default CardListScreen;