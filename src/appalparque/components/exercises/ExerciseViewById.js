import React, { Component } from 'react';
import ExerciseView from './ExerciseView';
import exercisesList from "../../resources/exercises.json";

class ExerciseViewById extends Component {
  constructor(props) {
    super(props);
  }

  // Move this method to store/modules/RoutinesModule.js
  GetExerciseById = (exerciseId) => {
    return exercisesList
      .filter(exercise => exercise.id == exerciseId)[0];
  }

  render() {
    return (
      <ExerciseView
        navigation={this.props.navigation}
        exercise={this.GetExerciseById(this.props.exerciseId)}
      />
    );
  }
}

export default ExerciseViewById;