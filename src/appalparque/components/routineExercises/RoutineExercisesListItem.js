import React, { Component } from 'react';
import { ListItem } from 'react-native-elements'

//prop param:Exercises
export default class RoutineExercisesListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        title={this.props.routineExercise.exercise.name}
        subtitle={`${this.props.routineExercise.quantity} ${this.props.routineExercise.quantityType} - ${this.props.routineExercise.series} serie(s)`}
        bottomDivider
        chevron
        onPress={() => this.props.navigation.navigate('ExerciseView', {
          exerciseId: this.props.routineExercise.exercise.id
        })}
      />
    );
  }
}