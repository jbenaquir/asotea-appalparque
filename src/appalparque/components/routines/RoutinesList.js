import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

export default class RoutinesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {
          this.props.routinesList.map((routine, i) => (
            <ListItem
              key={i}
              title={routine.name}
              label={routine.description}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate('RoutineView', {
                routineId: routine.id
              })}
            />
          ))
        }
      </View>
    );
  }
}