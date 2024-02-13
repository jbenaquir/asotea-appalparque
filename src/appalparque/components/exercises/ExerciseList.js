import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

//prop param:Exercises
export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        {
          this.props.exerciseList.map((exercise, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: exercise.image_url } }}
              title={exercise.name}
              label={exercise.label}
              bottomDivider
              chevron
              onPress={() => this.props.navigation.navigate('ExerciseView', {
                exerciseId: exercise.id
              })}
            />
          ))
        }
      </View >
    );
  }
}