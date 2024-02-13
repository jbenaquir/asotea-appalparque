import React, { Component } from 'react';
import { View } from 'react-native';
import RoutineLevelListItem from './RoutineLevelListItem'
import routineLevelsList from '../../resources/routineLevels.json'

export default class RoutineLevelList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {
          routineLevelsList.map((routineLevel) => (
            <RoutineLevelListItem
              key={routineLevel.id}
              navigation={this.props.navigation}
              routineLevel={routineLevel}
            />
          ))
        }
      </View>
    );
  }
}