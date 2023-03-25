import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import  Register from '../pages/Register';
import  Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import ForgotPasswordMessage from '../pages/ForgotPasswordMessage';




const Stack = createStackNavigator();

const AuthStack = () => {
    

  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ForgotPasswordMessage" component={ForgotPasswordMessage} screenOptions={{
        headerLeft: null
      }} />
    </Stack.Navigator>
  )
}

export default AuthStack