import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

const productCardStyles = {
  width: cardWidth,
} as const;

const productImageStyles = {
  maxWidth: 250,
  maxHeight: 250,
  marginBottom: 20,
} as const;

const productPriceStyles = {
  marginBottom: 30,
  color: "#fff",
} as const;

const productTitleStyles = {
  marginBottom: 30,
  fontWeight: "bold",
  color: "#fff",
} as const;

const productBuyButtonStyles = {} as const;

export const productStyles = StyleSheet.create({
  card: productCardStyles,
  image: productImageStyles,
  price: productPriceStyles,
  title: productTitleStyles,
  button: productBuyButtonStyles,
});
