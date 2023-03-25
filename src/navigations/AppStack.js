import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../pages/Home';




const Stack = createStackNavigator();

const AppStack = () => {
    

  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default AppStack