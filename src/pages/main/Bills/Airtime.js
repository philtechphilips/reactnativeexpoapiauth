import { View, Text, FlatList, Image, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import Button from "../../../components/Button";
import { CheckBox } from "react-native-elements";

const Airtime = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  const data = [
    {
      key: "Mtn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg",
    },
    {
      key: "Airtel",
      image: "https://dayo.com.ng/wp-content/uploads/2016/09/airtel.jpg",
    },
    {
      key: "Glo",
      image:
        "https://brandcrunch.com.ng/wp-content/uploads/2013/05/glo-logo.jpg",
    },
    {
      key: "Etisalat",
      image:
        "https://cdn.punchng.com/wp-content/uploads/2017/07/19170207/9Mobile-Telecom-Logo.jpg",
    },
  ];
  const [fontsLoaded] = useFonts({
    "Outfit-Black": require("../../../../assets/fonts/Outfit-Black.ttf"),
    "Outfit-Bold": require("../../../../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../../../../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../../../../assets/fonts/Outfit-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#f9f7f7",
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View>
          <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
            Select Mobile Operator{" "}
          </Text>

          <View style={{ marginTop: 20 }}>
            <FlatList
              horizontal={true}
              data={data}
              renderItem={({ item }) => (
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 100,
                      height: 100,
                      marginRight: 10,
                      borderRadius: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "Outfit-Medium",
                      marginTop: 5,
                      marginBottom: 5,
                    }}
                  >
                    {item.key}
                  </Text>
                </View>
              )}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
              Enter Phone Number
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginTop: 10,
              }}
            >
              <TextInput
                style={{ padding: 5 }}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                fontFamily: "Outfit-Regular",
                fontSize: 16,
                color: "#222",
              }}
            >
              Enter Amount
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 5,
                padding: 10,
                marginTop: 10,
              }}
            >
              <TextInput
                style={{ padding: 5 }}
                placeholder="Enter Amount"
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <CheckBox
              title="Ported Number?"
              checked={checked}
              onPress={handleCheckboxChange}
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <Button text="Proceed" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Airtime;
