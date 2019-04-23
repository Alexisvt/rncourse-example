import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ListItem } from '../ListItem';

export const PlaceList = ({ places = [], onItemDeleted }) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={({ item }) => (
        <ListItem
          placeName={item.value}
          onItemPressed={() => {
            onItemDeleted(item.key);
          }}
        />
      )}
    />
  );
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemDeleted: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});
