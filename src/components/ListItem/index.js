import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const ListItem = ({ placeName = '' }) => (
  <View style={styles.listItem}>
    <Text>{placeName}</Text>
  </View>
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
  placeName: PropTypes.string,
};
