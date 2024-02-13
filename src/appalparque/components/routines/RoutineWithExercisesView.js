import React, { Component } from 'react';
import { View } from 'react-native';
import RoutineView from './RoutineView';
import ExercisesListByIds from '../exercises/ExercisesListByIds';
import routinesList from '../../resources/routines.json';

export default class RoutineWithExercisesView extends Component {
  state = {
    routine: {
      id: null,
      name: null,
      description: null,
      routineLevelId: null,
      exercises: []
    },
    loading: true
  }

  // Move this method to store/modules/RoutinesModule.js
  GetRoutineById = (routineId) => {
    return routinesList
      .filter(routine => routine.id == routineId)[0];
  }

  componentDidMount() {
    GetRoutineById(this.props.routineId)
      .then((routine) => {
        this.setState({ routine, loading: false })
      });
  }

  render() {
    return (
      <>
        <RoutineView
          routine={this.state.routine}
        />
      </>
    );
  }
}