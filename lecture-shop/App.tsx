import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ProductCard } from "./components/ProductCard";

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
    padding: 30,
    paddingTop: 70,
  },
});
