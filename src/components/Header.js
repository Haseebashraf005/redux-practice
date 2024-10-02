import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png"
import { useSelector } from "react-redux";

import "./Header.css";

export const Header = () => {
  const products = useSelector(state => state.cartState);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Redux Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end >Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: { products.cartlist.length}</span>
      </Link>
    </header>
  )
}


