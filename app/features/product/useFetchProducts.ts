import { axiosInstance } from "@/app/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchProducts = () => {
  return useQuery({
    queryFn: async () => {
      const productsResponse = await axiosInstance.get("/products?limit=5");
      return productsResponse;
    },
    refetchOnWindowFocus: false,
    queryKey: ["products"],
  });

  // return {
  //   data,
  //   isLoading,
  // };
};
