import { View, Image } from "react-native";
import ProductPrice from "./ProductPrice";
import BuyButton from "./BuyButton";
import { productStyles } from "./styles";
import ProductName from "./ProductName";

import MyImage from "../assets/rome.jpg";

export const ProductCard = ({
  product,
}: {
  product?: { name?: string; price?: number; description?: string };
}) => {
  return (
    <View style={productStyles.card}>
      <ProductName name={product?.name} />
      <ProductPrice price={product?.price} />
      <Image source={MyImage} style={productStyles.image} />
      <BuyButton />
    </View>
  );
};
