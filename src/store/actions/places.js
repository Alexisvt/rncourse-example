import './actionTypes.js';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName,
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    payload: key,
  };
};

export const deselectPlace = key => {
  return {
    type: DESELECT_PLACE,
  };
};
