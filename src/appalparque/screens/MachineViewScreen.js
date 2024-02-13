import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, ThemeProvider } from 'react-native-elements';
import MachineViewById from '../components/machines/MachineViewById';

export default class MachineViewScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
        <ScrollView>
          <Card
            title='Detalles de Máquina de Ejercicios'
          >
            <MachineViewById
              navigation={this.props.navigation}
              machineId={this.props.navigation.state.params.machineId} />
          </Card>
        </ScrollView>
      </ThemeProvider>
    );
  }
}