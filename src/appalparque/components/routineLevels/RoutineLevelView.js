import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text, Image } from 'react-native-elements';

export default class RoutineLevelView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Image
          source={{
            uri: `https://www.asotea.com/appalparque/assets/routineLevels/${this.props.routineLevel.image}`
          }}
          style={{ height: 180 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text h3>{this.props.routineLevel.name}</Text>
        <Text>{this.props.routineLevel.description}</Text>
      </View>
    );
  }
}