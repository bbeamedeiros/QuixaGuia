import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';

/*import Page from '../screens/Page';*/
import Splash from './app';
import BemVindo from './app/BemVindo';
import CriarConta from './app/CriarConta';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <PaperProvider>
      <Navigator screenOptions={{ headerShown: false }}>

        <Screen name="Splash" component={Splash} />
        <Screen name="BemVindo" component={BemVindo} />
        <Screen name="CriarConta" component={CriarConta} />

      </Navigator>
    </PaperProvider>
  );
}
