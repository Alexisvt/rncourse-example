import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { PlaceInput } from '../components';
import { addPlace } from '../store/actions';

class SharedPlaceScreen extends Component {
  state = {
    placeName: '',
  };

  static propTypes = {
    onAddPlace: PropTypes.func.isRequired,
  };

  placeNameChangeHandler = placeName => {
    this.setState(() => ({
      placeName,
    }));
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <PlaceInput
          placeName={this.state.placeName}
          placeNameChanged={this.placeNameChangeHandler}
          onPlaceAdded={this.placeAddedHandler}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName)),
});

export default connect(
  null,
  mapDispatchToProps
)(SharedPlaceScreen);
