import { StyleSheet, Text, View, Image } from "react-native";
import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import Button from "../../components/Button";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Splash = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Outfit-Regular": require("../../../assets/fonts/Outfit-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const ButtonPress = () => {
    navigation.navigate('Login')
  }
  return (
    <>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          alignItems: "center",
          height: windowHeight,
        }}
      >
        <Image
          source={require("../../../assets/images/logoc.png")}
          style={{ width: 200, height: 80, top: 70 }}
        />
      </View>
      <View style={{ bottom: 70, paddingHorizontal: 20 }}>
        <Button text="Login" press={ButtonPress} />
        <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Outfit-Regular",
              fontSize: 16,
            }}
          >
            Create New Account
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({});
