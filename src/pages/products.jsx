import React from "react";
import Card from "../components/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ceket",
      image: "https://picsum.photos/200",
      price: 120,
    },
    {
      id: 2,
      name: "Bot",
      image: "https://picsum.photos/201",
      price: 90,
    },
    {
      id: 3,
      name: "T-Shirt",
      image: "https://picsum.photos/203",
      price: 210,
    },
    { id: 4, name: "Kaban", image: "https://picsum.photos/204", price: 369 },
    {
      id: 5,
      name: "Pantalon",
      image: "https://picsum.photos/205",
      price: 150,
    },
    {
      id: 6,
      name: "Terlik",
      image: "https://picsum.photos/201",
      price: 90,
    },
    {
      id: 7,
      name: "Kazak",
      image: "https://picsum.photos/203",
      price: 350,
    },
    {
      id: 8,
      name: "Çanta",
      image: "https://picsum.photos/204",
      price: 329,
    },
    {
      id: 9,
      name: "Şapka",
      image: "https://picsum.photos/205",
      price: 150,
    },
    {
      id: 10,
      name: "Trençkot",
      image: "https://picsum.photos/206",
      price: 1350,
    },
    {
      id: 11,
      name: "Takım Elbise",
      image: "https://picsum.photos/207",
      price: 2329,
    },
  ];

  return (
    <div className="Container d-flex flex-wrap justify-content-between gap-5 p-4 m-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
