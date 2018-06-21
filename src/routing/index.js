import { createStackNavigator } from 'react-navigation';

import Home from '/screens/Home';
import Game from '/screens/Game';

const screens = {
  Home: {
    screen: Home,
  },
  Game: {
    screen: Game,
  },
};

const config = {
  initialRouteName: 'Home',
};

export default createStackNavigator(screens, config);
