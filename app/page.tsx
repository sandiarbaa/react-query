"use client";
import Image from "next/image";
import { useProducts } from "./features/product/useProducts";
import { useEffect, useState } from "react";
import { axiosInstance } from "./lib/axios";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  // const { data: products, isLoading } = useProducts();

  // const productsQuery = useQuery({
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const productsResponse = await axiosInstance.get("/products?limit=5");

      // const productsResponse = await axios.get(
      //   "http://localhost:3000/api/products"
      // );
      // console.log("axios request");

      return productsResponse;
    },
    refetchOnWindowFocus: false,
    queryKey: ["products"],
  });

  // console.log(data);
  // console.log(isLoading);

  // console menggunakan customHooks useProducts
  // console.log(products.data);

  const renderProducts = () => {
    interface ProductProps {
      id: number;
      title: string;
      price: string;
      category: string;
      description: string;
      image: string;
    }

    // render menggunakan customHooks useProducts
    // return products.data?.map((product: ProductProps) => {

    return data?.data.map((product: ProductProps) => {
      return (
        <tr key={product.id} className="border text-center">
          <td className="border-[1.5px] p-2">{product.id}</td>
          <td className="border-[1.5px] px-3">
            {product.title.substring(0, 20)}
          </td>
          <td className="border-[1.5px] px-3">{product.price}</td>
          <td className="border-[1.5px] px-3">{product.category}</td>
          <td className="border-[1.5px]">
            {product.description.substring(0, 20)}
          </td>
          <td className="border-[1.5px] px-3">
            <Image
              src={product.image}
              alt="image"
              width={100}
              height={100}
              loading="eager"
              priority
            />
          </td>
        </tr>
      );
    });
  };

  return (
    <main className="p-5">
      <h1 className="font-bold text-2xl mb-3">Home Page</h1>
      <table className="table-auto">
        <thead>
          <tr className="border-[1.5px] bg-gray-500 text-white">
            <th className="border-[1.5px] w-[80px]">No.</th>
            <th className="border-[1.5px] w-[150px]">Title</th>
            <th className="border-[1.5px] w-[100px]">Price</th>
            <th className="border-[1.5px] w-[100px]">Category</th>
            <th className="border-[1.5px] w-[100px]">Description</th>
            <th className="border-[1.5px] w-[100px]">Image</th>
          </tr>
        </thead>
        <tbody>
          {renderProducts()}
          {isLoading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </main>
  );
}
