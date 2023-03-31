import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { useFonts } from "expo-font";
import BalanceCard from "../../components/home/BalanceCard";
import { ScrollView } from "react-native";
import Header from "../../components/home/Header";
import Payments from "../../components/home/Payments";
import RecentTransactions from "../../components/home/RecentTransactions";

const Home = () => {
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
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: '#fff' }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <BalanceCard />
        <Payments />
        <RecentTransactions />
      </ScrollView>

      {/* <TouchableOpacity onPress={() => logOut()}>
        <Text style={{color: 'red', marginTop:20, fontWeight: 700, fontSize: 18 }}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Home;
