import React, { Component } from 'react';
import { StyleSheet, Button, Text, ScrollView, FlatList, View, Dimensions } from 'react-native';
import autobind from 'autobind-decorator';
import { isPortrait } from '/helpers/orientation';

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
    isPortrait: isPortrait(),
  };

  constructor(props) {
    super(props);

    Dimensions.addEventListener('change', () => {
      this.setState({
        isPortrait: isPortrait(),
      });
    });

    this.renderCard = this.renderCard.bind(this);
  }

  renderCard({ item }) {
    return <Card name={item.name} imageUrl={item.image_uris.normal} id={item.id} navigation={this.props.navigation} />;
  }

  componentDidMount() {
    getCardList(this.state.set, this.state.rarity).then(resp => {
      this.setState({
        cards: resp,
      });
    });
  }

  render() {
    let numPerColumn = this.state.isPortrait ? 2 : 4;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Showing {this.state.rarity}s from {this.state.set}</Text>

        <FlatList
          key={numPerColumn}
          horizontal={false}
          numColumns={numPerColumn}
          data={this.state.cards}
          keyExtractor={card => card.id}
          renderItem={this.renderCard} />
      </View>
    );
  }
}

export default CardListScreen;