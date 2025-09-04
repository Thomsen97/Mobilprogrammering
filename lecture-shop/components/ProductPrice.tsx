import { Text, StyleSheet } from "react-native";

const ProductPrice = () => {
  return <Text style={styles.price}>Produktpris</Text>;
};

export default ProductPrice;

const styles = StyleSheet.create({
  price: {
    marginBottom: 30,
    color: "#fff",
  },
});
