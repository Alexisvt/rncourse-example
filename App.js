/* eslint-disable react/display-name */
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth';
import FindPlaceScreen from './src/screens/FindPlace';
import SharedPlaceScreen from './src/screens/SharedPlace';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register screens
Navigation.registerComponent(
  'awesome-places.AuthScreen',
  () => props => (
    <Provider store={store}>
      <AuthScreen {...props} />
    </Provider>
  ),
  () => AuthScreen
);
Navigation.registerComponent(
  'awesome-places.FindPlaceScreen',
  () => props => (
    <Provider store={store}>
      <FindPlaceScreen {...props} />
    </Provider>
  ),
  () => FindPlaceScreen
);
Navigation.registerComponent(
  'awesome-places.SharedPlaceScreen',
  () => props => (
    <Provider store={store}>
      <SharedPlaceScreen {...props} />
    </Provider>
  ),
  () => SharedPlaceScreen
);

Navigation.events().registerAppLaunchedListener(() => {
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
});
