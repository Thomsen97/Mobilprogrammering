import { ScrollView } from "react-native";

import type { Product } from "../types";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { TextInput } from "react-native";

export default function ProductList({ products }: { products: Product[];
  
 }) {
  const [filter, setFilter] = useState("");

  const handleProductFilter = (query: string) => {
    setFilter(query);
    onProductFiltering(query);
  };

  return (
    <ScrollView
      contentContainerStyle={{ gap: 25 }}
      style={{ flex: 1, width: "100%" }}
    >
      <TextInput
        placeholder="Filter products..."
        value={filter}
        onChangeText={handleProductFilter}
      />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  );
}
