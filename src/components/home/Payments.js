import { View, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Payments = () => {
  const navigation = useNavigation();
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
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "Outfit-Bold", fontSize: 16 }}>
        Bill Payment
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 25,
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Airtime")}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                padding: 8,
                backgroundColor: "rgba(72, 105, 178, 0.1)",
                borderRadius: 50,
                borderColor: "rgb(72, 105, 178)",
                borderWidth: 1,
              }}
            >
              <FeatherIcon name="phone" size={20} color="#4869b2" />
            </View>
            <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
              Airtime
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Data")}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                padding: 8,
                backgroundColor: "rgba(72, 105, 178, 0.1)",
                borderRadius: 50,
                borderColor: "rgb(72, 105, 178)",
                borderWidth: 1,
              }}
            >
              <FeatherIcon name="globe" size={20} color="#4869b2" />
            </View>
            <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
              Data
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Tv")}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              padding: 8,
              backgroundColor: "rgba(72, 105, 178, 0.1)",
              borderRadius: 50,
              borderColor: "rgb(72, 105, 178)",
              borderWidth: 1,
            }}
          >
            <Ionicons name="tv-outline" size={20} color="#4869b2" />
          </View>
          <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
            TV
          </Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate("Electricity")}>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              padding: 8,
              backgroundColor: "rgba(72, 105, 178, 0.1)",
              borderRadius: 50,
              borderColor: "rgb(72, 105, 178)",
              borderWidth: 1,
            }}
          >
            <Ionicons name="bulb-outline" size={20} color="#4869b2" />
          </View>
          <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
            Electricity
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              padding: 8,
              backgroundColor: "rgba(72, 105, 178, 0.1)",
              borderRadius: 50,
              borderColor: "rgb(72, 105, 178)",
              borderWidth: 1,
            }}
          >
            <Ionicons name="wifi-outline" size={20} color="#4869b2" />
          </View>
          <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
            Internet
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("ExcessAirtime")}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                padding: 8,
                backgroundColor: "rgba(72, 105, 178, 0.1)",
                borderRadius: 50,
                borderColor: "rgb(72, 105, 178)",
                borderWidth: 1,
              }}
            >
              <Ionicons name="cash-outline" size={20} color="#4869b2" />
            </View>
            <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
              Excess Airtime
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              padding: 8,
              backgroundColor: "rgba(72, 105, 178, 0.1)",
              borderRadius: 50,
              borderColor: "rgb(72, 105, 178)",
              borderWidth: 1,
            }}
          >
            <Ionicons name="football-outline" size={20} color="#4869b2" />
          </View>
          <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
            Betting
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <View
            style={{
              padding: 8,
              backgroundColor: "rgba(72, 105, 178, 0.1)",
              borderRadius: 50,
              borderColor: "rgb(72, 105, 178)",
              borderWidth: 1,
            }}
          >
            <Ionicons name="alert-outline" size={20} color="#4869b2" />
          </View>
          <Text style={{ marginTop: 10, fontFamily: "Outfit-Regular" }}>
            More Service
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Payments;
