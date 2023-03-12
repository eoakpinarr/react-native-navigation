import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './pages/Welcome';
import Kayıt from './pages/Kayıt';
import Info from './pages/Info';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Kayıt' component={Kayıt} />
        <Stack.Screen name='Info' component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
