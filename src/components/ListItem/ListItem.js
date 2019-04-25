import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ListItem = ({ onItemPressed, placeName, placeImage }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
      <Image source={placeImage} style={styles.placeImage} />
      <Text>{placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    backgroundColor: '#eee',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeImage: {
    marginRight: 8,
    width: 30,
    height: 30,
  },
});

ListItem.propTypes = {
  placeName: PropTypes.string.isRequired,
  onItemPressed: PropTypes.func.isRequired,
  placeImage: PropTypes.any.isRequired,
};
