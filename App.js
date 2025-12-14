import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/*import Page from '../screens/Page';*/
import Splash from './app/Splash';
import BemVindo from './app/BemVindo';
import Login from './app/Login';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
   
      <Screen name="Splash" component={Splash} />
      <Screen name="Welcome" component={BemVindo} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
