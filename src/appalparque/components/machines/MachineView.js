import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text, Image } from 'react-native-elements';

export default class MachineViewById extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text h2>{this.props.machine.name}</Text>
        <Image
          source={{ uri: `https://www.asotea.com/appalparque/assets/machines/${this.props.machine.image}` }}
          style={{ height: 220 }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text>
          {this.props.machine.description}
        </Text>
      </View>
    );
  }
}