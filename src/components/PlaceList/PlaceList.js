import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ListItem } from '../ListItem/ListItem';

export const PlaceList = ({ places = [], onItemSelected }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={({ item }) => (
        <ListItem
          placeName={item.name}
          placeImage={item.image}
          onItemPressed={() => {
            onItemSelected(item.key);
          }}
        />
      )}
    />
  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
