import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { ListItem, PlaceInput, PlaceList } from './src/components';

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
        places: currentState.places.concat(currentState.placeName),
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <ListItem placeName={place} key={index} />
    ));

    return (
      <View style={styles.container}>
        <PlaceInput
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
          placeName={this.state.placeName}
        />
        <PlaceList placesOutput={placesOutput} />
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
