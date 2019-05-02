import { Navigation } from 'react-native-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const startTabs = async () => {
  const trash = await Ionicons.getImageSource('ios-trash', 20, '#FF0666');

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
                        icon: trash,
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            component: {
              name: 'awesome-places.SharedPlaceScreen',
              options: {
                bottomTab: {
                  text: 'Shared Place',
                  icon: trash,
                },
              },
            },
          },
        ],
      },
    },
  });
};

export default startTabs;
