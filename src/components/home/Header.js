import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AuthContext } from "../../AuthProvider";


const Header = () => {
  const { user } = useContext(AuthContext);

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
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        backgroundColor: '#fff',
      }}
    >
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginRight: 7 }}>
            <Image
              source={require("../../../assets/images/icon.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={{ justifyContent: "space-between" }}>
            <Text
              style={{
                fontFamily: "Outfit-Regular",
                fontSize: 15,
                color: "#b0b0b0",
              }}
            >
              Welcome
            </Text>
            <Text style={{ fontFamily: "Outfit-Medium", fontSize: 18 }}>
              {user.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View
        style={{ backgroundColor: "#e0e0e0", padding: 5, borderRadius: 50 }}
      >
        <Ionicons name="notifications-outline" size={28} />
        <View
          style={{
            backgroundColor: "#f20800",
            borderRadius: 50,
            width: 8,
            height: 8,
            top: 0,
            right: 0,
            position: "absolute",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Header;
