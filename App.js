import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { PlaceDetail, PlaceInput, PlaceList } from './src/components';
import { addPlace, deletePlace, deselectPlace, selectPlace } from './src/store/actions';

class App extends Component {
  state = {
    placeName: '',
  };

  placeNameChangedHandler = placeName => {
    this.setState(prevState => {
      return { placeName };
    });
  };

  placeAddedHandler = placeName => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          {...this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          placeNameChangedHandler={this.placeNameChangedHandler}
          onPlaceAdded={this.placeAddedHandler}
          placeName={this.state.placeName}
        />
        <PlaceList onItemSelected={this.placeSelectedHandler} places={this.props.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
    padding: 26,
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
