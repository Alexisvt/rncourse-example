import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';

const store = configureStore();

export function registerScreens() {
  Navigation.registerComponentWithRedux(
    'navigation.App',
    () => require('./App').default,
    Provider,
    store
  );
}
