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

const Login = ({ fontFamily, medium, navigation }) => {

  const {logIn, error} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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
            Sign-in
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
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={{ marginBottom: 4, fontFamily: "Outfit-Medium" }}>
              Password
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
                secureTextEntry={true}
                placeholder="Enter Your Password"
                onChangeText={text => setPassword(text)}
              />
            </View>
          </View>

          <View style={{ marginTop: 40, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => logIn(email, password)}
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
                Sign In
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate('Register')}} style={{ alignItems: "center", marginBottom: 10 }}>
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 15 }}>
              Don't have an account?{" "}
              <Text style={{ color: "#0077b6", fontFamily: "Outfit-Bold" }}>
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('ForgotPassword')}} style={{ alignItems: "center", marginBottom: 80 }}>
            <Text
              style={{
                fontFamily: "Outfit-Medium",
                fontSize: 15,
                color: "#0077b6",
              }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
