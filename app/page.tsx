"use client";
import Image from "next/image";
import { useFetchProducts } from "./features/product/useFetchProducts";

export default function Home() {
  const { data, isLoading } = useFetchProducts();

  const renderProducts = () => {
    interface ProductProps {
      id: number;
      title: string;
      price: string;
      category: string;
      description: string;
      image: string;
    }

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
