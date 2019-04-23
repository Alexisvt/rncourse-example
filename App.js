import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { PlaceInput, PlaceList } from './src/components';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
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
          value: currentState.placeName,
        }),
      };
    });
  };

  onItemDeleted = key => {
    this.setState(currentState => {
      const places = currentState.places.filter(p => p.key !== key);
      return { places };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={this.state.placeName}
        />
        <PlaceList onItemDeleted={this.onItemDeleted} places={this.state.places} />
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
