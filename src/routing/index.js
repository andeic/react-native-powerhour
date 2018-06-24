import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '/screens/Home';
import DetailsScreen from '/screens/Details';
import SettingsScreen from '/screens/Settings';

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
});

const SettingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen },
});

export default createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
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
    animationEnabled: false,
    swipeEnabled: false,
  }
);
