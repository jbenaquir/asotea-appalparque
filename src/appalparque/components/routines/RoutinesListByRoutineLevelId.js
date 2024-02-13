import React, { Component } from 'react';
import { View } from 'react-native';
import RoutinesList from './RoutinesList'
import routinesListByRoutineLevelId from '../../resources/routines.json'

export default class RoutinesListByRoutineLevelId extends Component {
  constructor(props) {
    super(props);
  }

  // Move this method to store/modules/RoutinesModule.js
  GetRoutinesByRoutineLevelId = (routineLevelId) => {
    return routinesListByRoutineLevelId
      .filter(routine => routine.routineLevelId == routineLevelId);
  }

  render() {
    return (
      <View>
        <RoutinesList
          navigation={this.props.navigation}
          routinesList={this.GetRoutinesByRoutineLevelId(this.props.routineLevelId)} 
        />
      </View>
    );
  }
}