import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';
import FindPlaceScreen from './src/screens/FindPlace';
import SharedPlaceScreen from './src/screens/SharedPlace';

// Register screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);
Navigation.registerComponent('awesome-places.FindPlaceScreen', () => FindPlaceScreen);
Navigation.registerComponent('awesome-places.SharedPlaceScreen', () => SharedPlaceScreen);

Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'awesome-places.AuthScreen',
          },
        },
      ],
      options: {
        topBar: {
          title: {
            text: 'Login',
          },
        },
      },
    },
  },
});
