import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ProductCard } from "./components/ProductCard";
import { type Product } from "./types";

const product: Product = {
  id: "1",
  name: "Sample Product",
  price: 29.99,
  description: "This is a sample product description",
};

export default function App() {
  return (
    <View style={styles.container}>
      <ProductCard product={product} />
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
