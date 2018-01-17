import { DrawerNavigator } from 'react-navigation';

import WelcomeScreen from '../screens/WelcomeScreen';
import SearchList from '../screens/SearchList';

export const TabNav = DrawerNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  SearchList: {
    screen: SearchList
  }
});
