import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { PlaceList } from '../components';

class FindPlaceScreen extends Component {
  static propTypes = {
    places: PropTypes.array.isRequired,
  };

  render() {
    return (
      <View>
        <PlaceList places={this.props.places} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places,
});

export default connect(
  mapStateToProps,
  null
)(FindPlaceScreen);
