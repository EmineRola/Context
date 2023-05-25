import React, { useState } from "react";

// contexti kulllanmamıza sağlaya nfonksiyon
import { useContext } from "react";
// kullanmak istediğimiz  context
import CartContext from "../cartContext";

const Card = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  //useContext methodunu kullanarak kullanacağım contexti çağırdım ve değişkenim olan fonksiyonuma atadım,

  return (
    <div className="card ">
      <img
        src={product.image}
        style={{ width: "250px", height: "200px", borderRadius: "5px" }}
      />

      <div className="card-body" style={{ height: "80px" }}>
        <h4>{product.name}</h4>
        <p>{product.price} ₺ </p>
      </div>
      <button
        className="btn  bg-danger"
        onClick={() => {
          addToCart(product);
          //bir  tane ürün göndereceğim
        }}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default Card;
