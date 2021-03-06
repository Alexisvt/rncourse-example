import {ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE} from '../actions';


const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri:
              'https://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ace23929-4f1e-11e8-a5fd-018c7d910674_600x400.jpg',
          },
        }),
      };
    case DELETE_PLACE:
      const places = state.places.filter(p => p.key !== state.selectedPlace.key);
      return {
        ...state,
        places,
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => place.key === action.payload)
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
