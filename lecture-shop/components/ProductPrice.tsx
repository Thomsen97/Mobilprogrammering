import { Text, StyleSheet } from "react-native";
import { productStyles } from "./styles";
import { Product } from "../types";

export default function ProductPrice({ price }: Pick<Product, "price">) {
  return <Text style={productStyles.price}>{price}</Text>;
}
