import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const BalanceCard = () => {
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
    <>
      <View style={{ paddingVertical: 20 }}>
        <Text style={{ fontFamily: "Outfit-Regular", fontSize: 15 }}>
          Your Balance
        </Text>
        <Text style={{ fontFamily: "Outfit-Bold", fontSize: 28 }}>
          &#x20A6; 5,000
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "rgba(72, 105, 178, 0.1)",
          padding: 10,
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 5
        }}
      >
        <TouchableOpacity onPress={() => {navigation.navigate("FundWallet")}}>
        <View style={{ alignItems: "center" }}>
          <Ionicons name="wallet-outline" size={24} />
          <Text style={{ fontFamily: "Outfit-Regular", marginTop: 10 }}>
            Fund Wallet
          </Text>
        </View>
        </TouchableOpacity>

        <View style={{ borderRightWidth: 1 }}></View>

        <View style={{ alignItems: "center" }}>
          <Ionicons name="swap-vertical-outline" size={24} />
          <Text style={{ fontFamily: "Outfit-Regular", marginTop: 10 }}>
            Withdraw
          </Text>
        </View>
        <View style={{ borderRightWidth: 1 }}></View>

        <View style={{ alignItems: "center" }}>
          <Ionicons name="arrow-up-outline" size={24} />
          <Text style={{ fontFamily: "Outfit-Regular", marginTop: 10 }}>
            Payments
          </Text>
        </View>
      </View>

    </>
  );
};

export default BalanceCard;
