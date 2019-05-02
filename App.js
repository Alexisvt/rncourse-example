import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth';

// import { Provider } from 'react-redux';

// import configureStore from './src/store/configureStore';

// const store = configureStore();

// Register screens
Navigation.registerComponent('awesome-places.AuthScreen', () => AuthScreen);

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

// export function registerScreens() {
//   Navigation.registerComponentWithRedux(
//     'navigation.App',
//     () => require('./App').default,
//     Provider,
//     store
//   );
// }
