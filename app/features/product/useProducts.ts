import { axiosInstance } from "@/app/lib/axios";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Function untuk fetch products
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        const productsResponse = await axiosInstance.get("/products?limit=5");
        setProducts(productsResponse.data);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch products saat halaman di render/refresh
  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    data: products,
    isLoading,
  };
};
