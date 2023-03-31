import { Image, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/main/Home";
import Airtime from "../pages/main/Bills/Airtime";
import { useFonts } from "expo-font";
import Data from "../pages/main/Bills/Data";
import ExcessAirtime from "../pages/main/Bills/ExcessAirtime";
import Tv from "../pages/main/Bills/Tv";
import Electricity from "../pages/main/Bills/Electricity";
import FundWallet from "../pages/main/Bills/FundWallet";

const Stack = createStackNavigator();

const AppStack = () => {
  
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
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Airtime"
        component={Airtime}
        options={{
          headerBackTitle: " ",
          headerTitle: () => (
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
              Purchase Airtime
            </Text>
          ),
          headerBackImage: () => (
            <Image
              source={require("../../assets/images/arrow.png")}
              style={{ width: 35, height: 35, marginLeft: 15 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Data"
        component={Data}
        options={{
          headerBackTitle: " ",
          headerTitle: () => (
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
              Purchase Data Bundle
            </Text>
          ),
          headerBackImage: () => (
            <Image
              source={require("../../assets/images/arrow.png")}
              style={{ width: 35, height: 35, marginLeft: 15 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="ExcessAirtime"
        component={ExcessAirtime}
        options={{
          headerBackTitle: " ",
          headerTitle: () => (
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
              Sell Out Excess Airtime
            </Text>
          ),
          headerBackImage: () => (
            <Image
              source={require("../../assets/images/arrow.png")}
              style={{ width: 35, height: 35, marginLeft: 15 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Tv"
        component={Tv}
        options={{
          headerBackTitle: " ",
          headerTitle: () => (
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
              Pay TV Bills DSTV, GOTV..
            </Text>
          ),
          headerBackImage: () => (
            <Image
              source={require("../../assets/images/arrow.png")}
              style={{ width: 35, height: 35, marginLeft: 15 }}
            />
          ),
        }}
      />

<Stack.Screen
        name="Electricity"
        component={Electricity}
        options={{
          headerBackTitle: " ",
          headerTitle: () => (
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
              Pay Electricity Bill
            </Text>
          ),
          headerBackImage: () => (
            <Image
              source={require("../../assets/images/arrow.png")}
              style={{ width: 35, height: 35, marginLeft: 15 }}
            />
          ),
        }}
      />


<Stack.Screen
        name="FundWallet"
        component={FundWallet}
        options={{
          headerBackTitle: " ",
          headerTitle: () => (
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
              Fund Your Wallet
            </Text>
          ),
          headerBackImage: () => (
            <Image
              source={require("../../assets/images/arrow.png")}
              style={{ width: 35, height: 35, marginLeft: 15 }}
            />
          ),
        }}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
 