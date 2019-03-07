import React, { Component } from 'react';
import styled from 'styled-components/native';

import { Container, Row } from './src/components';

export default class App extends Component {
  state = {
    placeName: '',
    places: [],
  };

  placeNameChangedHandler = placeName => {
    // alert(placeName);
    this.setState({ placeName });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(currentState => {
      return {
        places: currentState.places.concat(currentState.placeName),
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, index) => (
      <StyledText key={index}>{place}</StyledText>
    ));

    return (
      <Container>
        <Row>
          <Input
            onChangeText={this.placeNameChangedHandler}
            value={this.state.placeName}
            placeholder="type here"
          />
          <StyledButton title="Add" onPress={this.placeSubmitHandler} />
        </Row>
        {placesOutput}
        <Row />
      </Container>
    );
  }
}

const Input = styled.TextInput`
  width: 70%;
`;

const StyledButton = styled.Button`
  width: 30%;
`;

const StyledText = styled.Text``;
