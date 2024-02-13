import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, ThemeProvider } from 'react-native-elements';
import RoutineViewById from '../components/routines/RoutineViewById'
import RoutineExercisesList from '../components/routineExercises/RoutineExercisesList'

export default class RoutineViewScreen extends Component {
  render() {
    return (
      <ThemeProvider>
        <ScrollView>
          <View>
            <Card title='Detalle de rutina'>
              <RoutineViewById
                routineId={this.props.navigation.state.params.routineId}
              />
            </Card>
            <Card
              title='Ejercicios'>
              <RoutineExercisesList
                navigation={this.props.navigation}
                routineId={this.props.navigation.state.params.routineId}
              />
            </Card>
          </View>
        </ScrollView>
      </ThemeProvider>
    );
  }
}