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
  
  const Electricity = () => {
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
        key: "IKEDC",
        image:
          "https://res.cloudinary.com/philo001/image/upload/payscribe/y46nwahaomun7cicmrcj.png",
      },
      {
        key: "EKEDC",
        image: "https://res.cloudinary.com/philo001/image/upload/payscribe/jlvk8ldmjglmlufk4ofl.png",
      },
      {
        key: "EEDC",
        image:
          "https://res.cloudinary.com/philo001/image/upload/payscribe/zvzbavxqf7tuxykgqamy.png",
      },
      {
        key: "IBEDC",
        image:
          "https://res.cloudinary.com/philo001/image/upload/payscribe/d2ytyrnmdsispvwa1j6z.png",
      },
      {
        key: "PHEDC",
        image:
          "https://res.cloudinary.com/philo001/image/upload/payscribe/nup6tnxdifg21gbasfbf.jpg",
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
              Select Bill{" "}
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
                      Meter type
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
               <Text style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingRight: 50,
                  paddingLeft: 10,
                  marginTop: 10,
                }}>Prepaid Meter</Text>
               <Text style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingVertical: 10,
                  paddingRight: 50,
                  paddingLeft: 10,
                  marginTop: 10,
                }}>Postpaid Meter</Text>
              </View>
            </View>
  
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
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
              <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
                    Phone Number
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
              <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
                    Customer's Name
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
                  placeholder="This will be auto-filled"
                  editable={false}
                />
              </View>
            </View>
  
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontFamily: "Outfit-Regular", fontSize: 16 }}>
                    Customer's Info
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
                  placeholder="This will be auto-filled"
                  editable={false}
                />
              </View>
            </View>
  
            <View style={{ marginTop: 30 }}>
              <Button text="Proceed" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  };
  
  export default Electricity;
  