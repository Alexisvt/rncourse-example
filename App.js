import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { PlaceDetail, PlaceInput, PlaceList } from './src/components';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null,
  };

  placeNameChangedHandler = placeName => {
    this.setState({ placeName });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(currentState => {
      return {
        places: currentState.places.concat({
          key: Math.random().toString(),
          name: currentState.placeName,
          image: {
            uri:
              'https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ace23929-4f1e-11e8-a5fd-018c7d910674_600x400.jpg',
          },
        }),
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => ({
      selectedPlace: prevState.places.find(place => place.key === key),
    }));
  };

  modalClosedHandler = () => {
    this.setState(prevState => {
      return { selectedPlace: null };
    });
  };

  placeDeletedHandler = () => {
    this.setState(currentState => {
      const places = currentState.places.filter(p => p.key !== currentState.selectedPlace.key);
      return { places, selectedPlace: null };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          {...this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={this.state.placeName}
        />
        <PlaceList onItemSelected={this.placeSelectedHandler} places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  placeButton: {
    width: '30%',
  },
});
