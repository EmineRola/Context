import { Link } from "react-router-dom";
// contexti kulllanmamıza sağlaya nfonksiyon
import { useContext } from "react";
// kullanmak istediğimiz  context
import CartContext from "../cartContext";
const Header = () => {
  //kullanmak istediğim contexte abone oldum
  const { items } = useContext(CartContext);
  //contextte tanımlamalar yapıp çağırmak istediğimi
  // useContext(CartContext)  ile çağırıyorum

  return (
    <header className="navbar bg-dark text-light">
      <div className="container-fluid">
        <Link to="/">
          <h1>Giyim</h1>
        </Link>
        <Link to="/checkout">
          <div className=" d-flex gap-3 display-6">
            <span className="badge bg-danger">{items.length}</span>
            <i className=" bi bi-cart-fill"></i>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
