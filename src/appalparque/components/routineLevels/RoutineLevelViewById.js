import React, { Component } from 'react';
import { View } from 'react-native';
import RoutineLevelView from './RoutineLevelView';
import routineLevelsList from '../../resources/routineLevels.json'

class RoutineLevelViewById extends Component {
  // Move this method to store/modules/RoutineLevelsModule.js
  GetRoutineLevelById = (routineLevelId) => {
    return routineLevelsList
      .filter(routineLevel => routineLevel.id == routineLevelId)[0];
  }

  render() {
    return (
      <>
        <RoutineLevelView
          routineLevel={this.GetRoutineLevelById(this.props.routineLevelId)}
        />
      </>
    );
  }
}

export default RoutineLevelViewById;