import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import image from "../../assets/images/logo.png";


import { useFonts } from "expo-font";
import { AuthContext } from "../AuthProvider";

const ForgotPassword = ({ fontFamily, medium, navigation }) => {

  const {passwordForgot, error} = useContext(AuthContext)
    const [email, setEmail] = useState('')


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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{ flex: 1,  paddingHorizontal: 20, paddingVertical: 40 }}
      >

        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              fontFamily: "Outfit-Bold",
              marginTop: 5,
              fontSize: 21,
              color: "#424242",
            }}
          >
            Forgot Password
          </Text>
          
          <View style={{ marginTop: 30 }}>
          {error && <Text style={{ color: 'red', textAlign: 'center', fontFamily: "Outfit-Bold" }}>{error}</Text>}
            <Text style={{ marginBottom: 4, fontFamily: "Outfit-Medium" }}>
              E-mail Address
            </Text>
            <View
              style={{
                paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: "#efefef",
                borderWidth: 1,
                borderColor: "#e1e1e1",
                borderRadius: 10,
              }}
            >
              <TextInput
                placeholder="Enter Your E-mail Address"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                    textContentType='emailAddress'
                    autoCapitalize='none'
              />
            </View>

            <View style={{ marginTop: 20, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => passwordForgot(email)}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: "#0077b6",
                borderWidth: 1,
                borderColor: "#e1e1e1",
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Outfit-Medium",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Send Password Reset Link
              </Text>
            </TouchableOpacity>
          </View>
          </View>

          

          <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{ alignItems: "center", marginBottom: 10 }}>
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 15 }}>
              Already have an account?{" "}
              <Text style={{ color: "#0077b6", fontFamily: "Outfit-Bold" }}>
                Sign-In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
