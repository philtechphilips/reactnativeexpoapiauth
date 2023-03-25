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
import React, { useState, useContext } from "react";
import { useFonts } from "expo-font";
import { AuthContext } from "../AuthProvider";


const Register = ({navigation}) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const {register, error} = useContext(AuthContext)

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
        style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 40 }}
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
            Create Account
          </Text>
          
          <View style={{ marginTop: 30 }}>
          {error && <Text style={{ color: 'red', textAlign: 'center', fontFamily: "Outfit-Bold" }}>{error}</Text>}
            <Text style={{ marginBottom: 4, fontFamily: "Outfit-Medium" }}>
              Name
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
                value={name}
                onChangeText={setName}
                placeholder="Enter Your Name"
              />
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
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
                value={email}
                onChangeText={setEmail}
                placeholder="Enter Your E-mail Address"
              />
            </View>
            <Text>{email}</Text>
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
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder="Enter Your Password"
              />
            </View>
            <Text>{password}</Text>
          </View>

          <View style={{ marginTop: 30 }}>
            <Text style={{ marginBottom: 4, fontFamily: "Outfit-Medium" }}>
              Password Confirmmation
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
                value={password_confirmation}
                onChangeText={setPasswordConfirmation}
                secureTextEntry={true}
                placeholder="Re-Enter Your Password"
              />
            </View>

            <Text style={{ fontFamily: "Outfit-Medium" }}>
              {password_confirmation}
            </Text>
          </View>

          <View style={{ marginTop: 40, marginBottom: 10 }}>
            <TouchableOpacity
              style={{
                paddingHorizontal: 15,
                paddingVertical: 15,
                backgroundColor: "#0077b6",
                borderWidth: 1,
                borderColor: "#e1e1e1",
                borderRadius: 10,
                alignItems: "center",
              }}
              onPress={() => register(name, email, password, password_confirmation)}
            >
              <Text
                style={{
                  fontFamily: "Outfit-Medium",
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={{ alignItems: "center", marginBottom: 80 }}>
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 15 }}>
              Have an Account?{" "}
              <Text style={{ color: "#0077b6", fontFamily: "Outfit-Bold" }}>
                Login
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
