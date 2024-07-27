import { axiosInstance } from "@/app/lib/axios";
import axios from "axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
  interface ProductProps {
    id: number;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }

  const [products, setProducts] = useState<ProductProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        // const productsResponse = await axiosInstance.get("/products?limit=5");
        const productsResponse = await axios.get(
          "http://localhost:3000/api/products"
        );
        setProducts(productsResponse.data);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    data: products,
    isLoading,
  };
};
