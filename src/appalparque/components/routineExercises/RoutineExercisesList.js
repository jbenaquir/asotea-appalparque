import React, { Component } from 'react';
import { View } from 'react-native';
import routinesList from '../../resources/routines.json';
import exercisesList from "../../resources/exercises.json";
import RoutineExercisesListItem from "./RoutineExercisesListItem"

//prop param:Exercises
export default class RoutineExercisesList extends Component {
  constructor(props) {
    super(props);
  }

  GetRoutineById = (routineId) => {
    return routinesList
      .filter(routine => routine.id == routineId)[0];
  }

  // Move this method to store/modules/RoutinesModule.js
  GetExerciseById = (exerciseId) => {
    return exercisesList
      .filter(exercise => exercise.id == exerciseId)[0];
  }

  GetRoutineExercises = (routineId) => {
    return this.GetRoutineById(routineId)
      .routineExercises.map((routineExercise) => {
        return Object.assign(routineExercise, {
          exercise: this.GetExerciseById(routineExercise.exerciseId)
        })
      })
  }

  render() {
    return (
      <View>
        {
          this.GetRoutineExercises(this.props.routineId)
            .map((routineExercise, i) => (
              <RoutineExercisesListItem 
                key={i}
                navigation={this.props.navigation} 
                routineExercise={routineExercise} />
            ))
        }
      </View>
    );
  }
}