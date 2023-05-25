import React from "react";
import { useContext } from "react";
import CartContext from "../cartContext";

const Checkout = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );
  return (
    <div className="d-grid gap-5 p-4">
      <h1>
        Toplam <span className="badge bg-danger">{total}</span>
      </h1>
      {items.map((item) => (
        <div className="d-flex border shadow p-4 justify-content-between align-items-center">
          <img
            className="rounded"
            src={item.image}
            style={{ width: "100px" }}
            alt={item.name}
          />
          <h1>{item.name}</h1>
          <h1 className="text-success">{item.price} ₺</h1>
          <p>Miktar:{item.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
