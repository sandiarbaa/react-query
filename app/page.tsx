"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const fetchProducts = async () => {
    try {
      const productsResponse = await axios.get(
        "https://fakestoreapi.com/products?limit=5"
      );
      console.log(productsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
