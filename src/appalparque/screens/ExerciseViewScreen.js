import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ThemeProvider, Card } from 'react-native-elements';

import ExerciseViewById from '../components/exercises/ExerciseViewById';

class ExerciseViewScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
        <ScrollView>
          <Card>
            <ExerciseViewById
              navigation={this.props.navigation}
              exerciseId={this.props.navigation.state.params.exerciseId}
            />
          </Card>
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default ExerciseViewScreen;