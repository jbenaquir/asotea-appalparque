import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, ThemeProvider } from 'react-native-elements';
import RoutineLevelViewById from '../components/routineLevels/RoutineLevelViewById';
import RoutinesListByRoutineLevelId from '../components/routines/RoutinesListByRoutineLevelId';

export default class RoutineSelectionScreen extends Component {
  render() {
    return (
      <ThemeProvider>
        <ScrollView>
          <Card>
            <RoutineLevelViewById
              routineLevelId={this.props.navigation.state.params.routineLevelId}
            />
          </Card>
          <Card title='Rutinas'>
            <RoutinesListByRoutineLevelId
              navigation={this.props.navigation}
              routineLevelId={this.props.navigation.state.params.routineLevelId}
            />
          </Card>
        </ScrollView>
      </ThemeProvider>
    );
  }
}
