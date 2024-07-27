"use client";
import axios from "axios";
import { useEffect } from "react";
import { axiosInstance } from "./lib/axios";

export default function Home() {
  // Function untuk fetch dataProducts (Read)
  const fetchProducts = async () => {
    try {
      const productsResponse = await axiosInstance.get("/products?limit=5");
      console.log(productsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Misalnya
  // Function untuk create dataProducts (Create)
  const createProducts = async () => {
    try {
      const productsResponse = await axiosInstance.post("/products"); // jika endpoint nya sama, cukup panggil url setelahnya saja kemana, dan ganti method nya
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
