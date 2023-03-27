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
import { AuthContext } from "../../AuthProvider";
import Button from "../../components/Button";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { register, error } = useContext(AuthContext);

  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../../../assets/fonts/Outfit-Black.ttf"),
    "Outfit-Bold": require("../../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../../../assets/fonts/Outfit-Regular.ttf"),
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
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5, fontFamily: "Outfit-Regular" }}>
            Full Name
          </Text>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: "#b0b0b0",
              borderRadius: 5,
            }}
          >
            <TextInput
              placeholder="Enter Your Full Name"
              style={{ fontFamily: "Outfit-Regular" }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5, fontFamily: "Outfit-Regular" }}>
            E-mail Address
          </Text>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: "#b0b0b0",
              borderRadius: 5,
            }}
          >
            <TextInput
              placeholder="Email Address"
              keyboardType="email-address"
              style={{ fontFamily: "Outfit-Regular" }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5, fontFamily: "Outfit-Regular" }}>
            Password
          </Text>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: "#b0b0b0",
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={showPassword ? false : true}
              style={{ fontFamily: "Outfit-Regular", flex: 7 }}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <Text
                  style={{
                    fontFamily: "Outfit-Regular",
                    color: "#4869B2",
                    flex: 1,
                  }}
                >
                  Hide
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: "Outfit-Regular",
                    color: "#4869B2",
                    flex: 1,
                  }}
                >
                  Show
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5, fontFamily: "Outfit-Regular" }}>
            Confirm Password
          </Text>
          <View
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              borderWidth: 1,
              borderColor: "#b0b0b0",
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              placeholder="Enter Password Again"
              secureTextEntry={showPassword ? true : false}
              style={{ fontFamily: "Outfit-Regular", flex: 7 }}
            />
            <TouchableOpacity
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? (
                <Text
                  style={{
                    fontFamily: "Outfit-Regular",
                    color: "#4869B2",
                    flex: 1,
                  }}
                >
                  Hide
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: "Outfit-Regular",
                    color: "#4869B2",
                    flex: 1,
                  }}
                >
                  Show
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button text="Create Account" />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
