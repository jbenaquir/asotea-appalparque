import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';

export default class RoutineView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text h3>{this.props.routine.name}</Text>
        <Text>{this.props.routine.description}</Text>
      </>
    );
  }
}