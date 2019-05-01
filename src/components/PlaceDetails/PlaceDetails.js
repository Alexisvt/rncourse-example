import PropTypes from 'prop-types';
import React from 'react';
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native';

export const PlaceDetail = ({ name, image, onItemDeleted, onModalClosed }) => (
  <Modal visible={!!(name && image)} onRequestClose={onModalClosed}>
    <View style={styles.modalContainer}>
      {name && image && (
        <View>
          <Image source={image} style={styles.placeImage} />
          <Text style={styles.placeName}>{name}</Text>
        </View>
      )}
      <View>
        <Button title="Delete" color="red" onPress={onItemDeleted} />
        <Button title="Close" onPress={onModalClosed} />
      </View>
    </View>
  </Modal>
);
PlaceDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  onItemDeleted: PropTypes.func.isRequired,
  onModalClosed: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    height: 200,
    width: '100%',
  },
  placeName: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
