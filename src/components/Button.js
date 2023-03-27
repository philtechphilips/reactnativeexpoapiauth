import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';

const Button = ({text, press, navigation}) => {
    const [fontsLoaded] = useFonts({
        'Outfit-Regular': require('../../assets/fonts/Outfit-Regular.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }
  return (
    <View>
        <TouchableOpacity onPress={press} style={{ backgroundColor: '#4869B2', padding: 15, marginBottom: 30, borderRadius: 5  }}>
            <Text style={{textAlign: 'center', fontFamily: 'Outfit-Regular', fontSize: 17, color: '#fff'}}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Button