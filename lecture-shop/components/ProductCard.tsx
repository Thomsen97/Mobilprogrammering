import { View, Image, StyleSheet, Button, Pressable } from "react-native";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";

export default function ProductCard() {
  return (
    <View>
      <ProductTitle />
      <ProductPrice />
      <Image source={require("../assets/rome.jpg")} style={styles.Image} />
      <Button style={styles.button} title={"Kjøp nå"} />
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    maxWidth: 250,
    maxHeight: 250,
  },

  button: {},
});
