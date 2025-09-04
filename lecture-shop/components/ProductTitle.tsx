import { Text, StyleSheet } from "react-native";

const ProductTitle = () => {
  return <Text style={styles.title}>Produktnavn</Text>;
};

export default ProductTitle;

const styles = StyleSheet.create({
  title: {
    marginBottom: 30,
    fontWeight: "bold",
    color: "#fff",
  },
});
