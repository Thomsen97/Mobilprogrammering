import { SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";
import { ProductCard } from "./ProductCardWithProps";
import React from "react";
import { productStyles } from "./styles";

export default function ProductList({
  products,
  theme = { background: "#fff" },
}: {
  theme?: { background: string };
  products: { id: string; name: string; price: number; description: string }[];
}) {
  const TextInputExample = () => {
    const [text, onChangeText] = React.useState("");
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1, backgroundColor: theme.background }}
          contentContainerStyle={{ gap: 25 }}
        >
          <TextInput
            style={productStyles.search}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search for product"
          />
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
  });

  return <TextInputExample />;
}
