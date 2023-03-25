import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../AuthProvider'
import { TouchableOpacity } from 'react-native'

const Home = ({ fontFamily, medium }) => {
  const {user, logOut} = useContext(AuthContext)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontFamily: medium, fontSize: 16 }}>Hello</Text>
      <Text style={{ fontFamily: fontFamily, fontSize: 24, marginTop: 10 }}>{user.name}
      
      </Text>
      <TouchableOpacity onPress={() => logOut()}>
        <Text style={{color: 'red', marginTop:20, fontWeight: 700, fontSize: 18 }}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home