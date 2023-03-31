import {  Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import  Register from '../pages/Auth/Register';
import  Login from '../pages/Auth/Login';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Splash from '../pages/Auth/Splash';
import { useFonts } from "expo-font";
const Stack = createStackNavigator();

const AuthStack = () => {
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../../assets/fonts/Outfit-Black.ttf"),
    "Outfit-Bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../../assets/fonts/Outfit-Regular.ttf"),
  });

  if (!fontsLoaded) { 
    return null;
  }


  return (
    
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Splash" component={Splash} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Register" component={Register} options={{
        headerBackTitle: ' ',
         headerTitle: () => (
            <Text
              style={{ fontFamily: 'Outfit-Medium', fontSize: 18 }}
            >Login to your account</Text>
          ),
          headerBackImage: () => (
              <Image
                source={require('../../assets/images/arrow.png')}
                style={{ width: 35, height: 35, marginLeft: 15 }}
              />
            ),
            
          }}/>
      <Stack.Screen name="Login" component={Login} options={{
        headerBackTitle: ' ',
         headerTitle: () => (
            <Text
              style={{ fontFamily: 'Outfit-Medium', fontSize: 18 }}
            >Login to your account</Text>
          ),
          headerBackImage: () => (
              <Image
                source={require('../../assets/images/arrow.png')}
                style={{ width: 35, height: 35, marginLeft: 15 }}
              />
            ),
            
          }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  )
}

export default AuthStack