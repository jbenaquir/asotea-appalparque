import React, { Component } from 'react';
import { ActivityIndicator, View, ScrollView, Image } from 'react-native';
import { Text, ThemeProvider, Card } from 'react-native-elements';
import RoutineLevelList from "../components/routineLevels/RoutineLevelList";

class RoutineLevelSelectionScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
        <ScrollView>
          <View>
            <Text h2>Cuál es tu nivel?</Text>
            <RoutineLevelList
              navigation={this.props.navigation}
            />
            <Card title='Patrocinadores:'>
              <Image
                source={require('../assets/logoParquesParaTodos.png')}
                style={{ width: 110, height: 110 }}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Image
                source={require('../assets/logoPortafolioDistritalDeEstimulos.png')}
                style={{ width: 150, height: 60 }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </Card>
          </View>
        </ScrollView>
      </ThemeProvider>
    );
  }
}

export default RoutineLevelSelectionScreen;