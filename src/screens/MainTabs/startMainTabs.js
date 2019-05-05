import { Navigation } from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const startTabs = async () => {
  const map = await Ionicons.getImageSource('md-map', 30);
  const share = await Ionicons.getImageSource('ios-share-alt', 30);

  Navigation.setDefaultOptions({
    bottomTab: {
      selectedIconColor: 'blue',
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'awesome-places.FindPlaceScreen',
                    options: {
                      bottomTab: {
                        text: 'Find Place',
                        icon: map,
                      },
                      topBar: {
                        title: {
                          text: 'Find Places',
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'awesome-places.SharedPlaceScreen',
                    options: {
                      bottomTab: {
                        text: 'Shared Place',
                        icon: share,
                      },
                      topBar: {
                        title: {
                          text: 'Shared Places',
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
        options: {},
      },
    },
  });
};

export default startTabs;
