import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

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
  // navigationOptions: {
  //   headerStyle: {
  //     //backgroundColor: '#f4511e',
  //   },
  // },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      // const { routeName } = navigation.state;
      // let iconName;
      // if (routeName === 'Home') {
      //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      // } else if (routeName === 'Settings') {
      //   iconName = `ios-options${focused ? '' : '-outline'}`;
      // }

      // // You can return any component that you like here! We usually use an
      // // icon component from react-native-vector-icons
      // return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
};

export default createBottomTabNavigator(screens, config);
