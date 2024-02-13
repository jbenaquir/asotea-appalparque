import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, View } from 'react-native';
import { Image, Button, CheckBox, SocialIcon, ThemeProvider } from 'react-native-elements';
/*

this works???


class SetUpLocalStorage {
  webView.getSettings().setDomStorageEnabled(true);
  webView.getSettings().setDatabaseEnabled(true);

  if (Build.VERSION.SDK_INT < Build.VERSION_CODES.KITKAT) {
    webView.getSettings().setDatabasePath("/data/data/" + webView.getContext().getPackageName() + "/databases/");
  }
}
*/

function ProcessNext(props) {
  if (props.AcceptedTerms) {
    return <Button
      title="Ughrr!!!"
      style={{ width: 300, marginTop: 40, marginBottom: 150 }}
      onPress={() => this.props.navigation.navigate('RoutineLevelSelection')}
    />;
  }
  else {
    return <Button
      title="Ver Términos y Condiciones"
      style={{ width: 300, marginTop: 40, marginBottom: 150 }}
      onPress={() => this.props.navigation.navigate('TermsAndConditionsScreen')}
    />;
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <ThemeProvider>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('../assets/logo.png')}
              style={{ width: 300, height: 300, margin: 0 }}
              PlaceholderContent={<ActivityIndicator />}
            />

            <ProcessNext />
            <Image
              source={require('../assets/logoAlcaldia2019.png')}
              style={{ width: 300, height: 40 }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
        </ScrollView>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
    color: '#ffffff',
  },
});

export default HomeScreen;