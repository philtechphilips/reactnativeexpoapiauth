import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Stacknav from "./src/navigations/Stacknav";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/AuthProvider";

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <AuthProvider>
          <Stacknav />
        </AuthProvider>
        </NavigationContainer>

        <StatusBar backgroundColor="#fff" barStyle="light-content" />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
