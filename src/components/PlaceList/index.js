import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ListItem } from '../ListItem';

export const PlaceList = ({ places = [], onItemDeleted }) => {
  const placesOutput = places.map((place, index) => (
    <ListItem
      placeName={place}
      key={index}
      onItemPressed={() => {
        onItemDeleted(index);
      }}
    />
  ));
  return <View style={styles.listContainer}>{placesOutput}</View>;
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.string).isRequired,
  onItemDeleted: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
