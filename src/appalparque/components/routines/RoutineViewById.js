import React, { Component } from 'react';
import { View } from 'react-native';
import RoutineView from './RoutineView';
import routinesList from '../../resources/routines.json';

class RoutineViewById extends Component {
  state = {
    routine: {
      id: null,
      name: null,
      description: null,
      routineLevelId: null
    }
  }
  // Move this method to store/modules/RoutinesModule.js
  GetRoutineById = (routineId) => {
    return routinesList
      .filter(routine => routine.id == routineId)[0];
  }

  render() {
    return (
      <RoutineView
        routine={this.GetRoutineById(this.props.routineId)}
      />
    );
  }
}

export default RoutineViewById;