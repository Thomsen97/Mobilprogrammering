import { Text } from "react-native";
import { productStyles } from "./styles";
import { Product } from "../types";

export default function ProductName({ name }: Pick<Product, "name">) {
  return <Text style={productStyles.title}>{name}</Text>;
}
