import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <View style={styles.container}>
      <ProductCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b5b5bff",
    alignItems: "center",
    justifyContent: "center",
  },
});
