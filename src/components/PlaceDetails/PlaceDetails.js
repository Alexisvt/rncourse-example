import PropTypes from 'prop-types';
import React from 'react';
import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
        <TouchableOpacity onPress={onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon name="ios-trash" size={30} color="red" />
          </View>
        </TouchableOpacity>
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
  deleteButton: {
    alignItems: 'center',
  },
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
