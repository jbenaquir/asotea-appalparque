import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
import ExerciseViewScreen from '../screens/ExerciseViewScreen';
import RoutineViewScreen from '../screens/RoutineViewScreen';
import RoutineSelectionScreen from '../screens/RoutineSelectionScreen';
import RoutineLevelSelectionScreen from '../screens/RoutineLevelSelectionScreen';
import MachineViewScreen from '../screens/MachineViewScreen';

const Router = createStackNavigator(
  {
    Home: { title: 'Home', screen: HomeScreen },
    TermsAndConditionsScreen: { screen: TermsAndConditionsScreen },
    ExerciseView: { screen: ExerciseViewScreen },
    RoutineView: { screen: RoutineViewScreen },
    RoutineSelection: { screen: RoutineSelectionScreen },
    RoutineLevelSelection: { screen: RoutineLevelSelectionScreen },
    MachineView: { screen: MachineViewScreen }
  },
  {
    initialRouteName: 'Home'
  }
);

export default Router;