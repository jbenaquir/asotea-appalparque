import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text, Image, Button } from 'react-native-elements';

export default class ExerciseView extends Component {
  constructor(props) {
    super(props);
    this.renderMachineViewButton
  }

  renderMachineViewButton() {
    if (this.props.exercise.machineId) {
      return (
        <Button
          title="Conocer más sobre máquina de ejercicios"
          onPress={() => this.props.navigation.navigate('MachineView', {
            machineId: this.props.exercise.machineId
          })}
        />
      );
    }
    else {
      return (
        <></>
      );
    }
  }

  render() {
    return (
      <View>
        <Text h3>
          {this.props.exercise.name}
        </Text>
        <Image
          source={{ uri: `https://www.asotea.com/appalparque/assets/exercises/${this.props.exercise.image}` }}
          style={{ height: 240 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={{ marginBottom: 20 }}>
          {this.props.exercise.description}
        </Text>
        {this.renderMachineViewButton()}
      </View>
    );
  }
}