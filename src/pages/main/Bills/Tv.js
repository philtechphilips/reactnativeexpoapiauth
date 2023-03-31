import {
    View,
    Text,
    FlatList,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import React, { useState } from "react";
  import { useFonts } from "expo-font";
  import { useNavigation } from "@react-navigation/native";
  import { TextInput } from "react-native";
  import Button from "../../../components/Button";
  import { CheckBox } from "react-native-elements";
  import { SelectList } from "react-native-dropdown-select-list";
  
  const Tv = () => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);
    const [dataPlan, setDataPlan] = useState("");
  
    const plans = [
      { key: "Plan1", value: "1 Month" },
      { key: "Plan2", value: "2 Month(s)" },
      { key: "Plan3", value: "3 Month(s)" },
      { key: "Plan4", value: "4 Month(s)" },
      { key: "Plan5", value: "5 Month(s)" },
    ];
  
    const handleCheckboxChange = () => {
      setChecked(!checked);
    };
    const data = [
      {
        key: "GOTV",
        image:
          "https://res.cloudinary.com/philo001/image/upload/payscribe/jioh5cebzsnqtzfxkdkc.png",
      },
      {
        key: "DSTV",
        image: "https://res.cloudinary.com/philo001/image/upload/payscribe/yvdt0l8cvwcn0s7rzwwn.png",
      },
      {
        key: "Startimes",
        image:
          "https://res.cloudinary.com/philo001/image/upload/payscribe/db996v5fwfkgvvhieban.png",
      },
      {
        key: "DSTV ShowMax",
        image:
          "https://res.cloudinary.com/philo001/image/upload/payscribe/sm0frlc2xqyniurmx4hv.png",
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
              Select TV Cable{" "}
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
                    Smart Card Number
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
                  placeholder="Smart Card Number"
                  keyboardType="numeric"
                />
              </View>
            </View>
  
            <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
              How many month?
            </Text>
            <SelectList
              setSelected={setDataPlan}
              data={plans}
              placeholder={"Select Data Plan"}
              searchPlaceholder="Select Data Plan"
              fontFamily="Outfit-Regular"
              boxStyles={{ borderRadius: 5, marginTop: 10, borderColor: '#222' }}
            />
          </View>
  
            <View style={{ marginTop: 30 }}>
              <Button text="Verify" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
  
  export default Tv;
  