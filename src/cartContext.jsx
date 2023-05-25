import { createContext, useState } from "react";

const CartContext = createContext();
// children  sağlayıcı tarafından sarılan diğer bileşenler
// CartProvider  İçerisinde bulınan elemanlara veri aktarma

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  // itemsin state ni tutacağız verinin

  //sepete ürün ekleme

  const addToCart = (product) => {
    //parametre olarak bir ürün alıp ürünlerin yanına eklliyordu
    const foundItem = items.find((item) => item.id === product.id);
    if (foundItem) {
      foundItem.amount++;
    } else {
      setItems([...items, { ...product, amount: 1 }]);
    }
  };
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {/* kart hakkındaki bilgileri sağlayacak peki neye sağlayacak  children lara sağlayıcı tarafondan sarılan birleşenlere  */}

      {children}
    </CartContext.Provider>
  );
  //verinin stateni tutma
}

export default CartContext;
