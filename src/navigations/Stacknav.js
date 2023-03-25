import React, {useState, useEffect, useContext} from "react"
import {View, ActivityIndicator} from 'react-native'
import {AuthContext} from '../AuthProvider'
import * as SecureStore from 'expo-secure-store'
import AuthStack from './AuthStack'
import AppStack from './AppStack'
import { createStackNavigator } from "@react-navigation/stack"



const Stack = createStackNavigator();

const Stacknav = () => {
  const {user, setUser}       = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      SecureStore.getItemAsync('user').then(userString => {
          setUser(JSON.parse(userString))

          setLoading(false)
      }).catch(err => {
          console.log(err)
      })

  }, [])

  if (loading) {
      return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size="large" />
          </View>
      )
  }

  return (
          <>
              {user ? <AppStack /> : <AuthStack />}
          </>
  )
}

export default Stacknav