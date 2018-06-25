import axios from 'axios';

export function getCardList(set, rarity) {
  return axios.get(`cards/search?q=set:${set}+rarity:${rarity}`)
    .then(x => x.data)
    .then(resp => {
      return resp.data;
    });
}