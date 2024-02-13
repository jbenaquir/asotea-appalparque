import React, { Component } from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { Image, ListItem } from 'react-native-elements'

export default class RoutineLevelListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        key={this.props.routineLevel.id}
        subtitle={
          <Image
            source={{ uri: `https://www.asotea.com/appalparque/assets/routineLevels/${this.props.routineLevel.image}` }}
            style={{ height: 180 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        }
        bottomDivider
        onPress={() =>
          this.props.navigation.navigate('RoutineSelection', {
            routineLevelId: this.props.routineLevel.id
          })
        }
        containerStyle={styles.container}
        chevron
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    padding: 0
  }
})
