import PropTypes from 'prop-types';
import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export const PlaceInput = ({ placeName, placeNameChangedHandler, placeSubmitHandler }) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder="An awesome place"
      value={placeName}
      onChangeText={placeNameChangedHandler}
    />
    <Button onPress={placeSubmitHandler} title="Add" />
  </View>
);

PlaceInput.propTypes = {
  placeName: PropTypes.string.isRequired,
  placeNameChangedHandler: PropTypes.func.isRequired,
  placeSubmitHandler: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
});
