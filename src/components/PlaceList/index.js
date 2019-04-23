import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';


export const PlaceList = ({ placesOutput }) => (
  <View style={styles.listContainer}>{placesOutput}</View>
);

PlaceList.propTypes = { placesOutput: PropTypes.array.isRequired };

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
