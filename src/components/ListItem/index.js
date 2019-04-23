import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ListItem = ({ onItemPressed, placeName }) => (
  <TouchableOpacity onPress={onItemPressed}>
    <View style={styles.listItem}>
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
  },
});

ListItem.propTypes = {
  placeName: PropTypes.string.isRequired,
  onItemPressed: PropTypes.func.isRequired,
};
