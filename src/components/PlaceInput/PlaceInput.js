import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const PlaceInput = ({ placeName, placeNameChanged, onPlaceAdded }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder="An awesome place"
      value={placeName}
      onChangeText={placeNameChanged}
    />
    <Button
      onPress={() => {
        onPlaceAdded(placeName);
      }}
      title="Add"
    />
  </View>
);

PlaceInput.propTypes = {
  placeName: PropTypes.string.isRequired,
  placeNameChanged: PropTypes.func.isRequired,
  onPlaceAdded: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  placeInput: {
    width: '70%',
  },
});
