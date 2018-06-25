import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '/screens/Home';
import CardDetailsScreen from '/screens/CardDetails';
import CardListScreen from '/screens/CardList';
import SettingsScreen from '/screens/Settings';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
});

const CardStack = createStackNavigator({
  CardList: { screen: CardListScreen },
  CardDetails: { screen: CardDetailsScreen },
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    CardList: { screen: CardStack },
    Settings: { screen: SettingsStack },
  },
  {
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
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);
