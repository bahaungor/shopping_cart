import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// IMPORT CONTEXTS
import { ShopContext } from '../../ShopContexts';

// IMPORT EXTERNAL CSS
import ThemeSwitch from '../darkTheme/switch';
import './header.css';

export default function Header({ handleHamburgerClick }) {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(ShopContext);

  function openCart() {
    if (cart.length > 0) {
      navigate('/cart');
    }
  }
 
  // YOU CAN USE STATE WHICH YOU ASSIGNED FETCHED DATA ABOVE
  return (
    <header>
      <ThemeSwitch />
      <div className="logo">
        <Link to="/" className="header">FakeShop</Link>
        <img src="/favicon.ico" alt="logo" />
      </div>
      <div className="links">
        <Link to="/" className="HomeBtn">Home</Link>
        <Link to="/shop" className="ShopBtn">Shop</Link>
        <div className="hamburger" onClick={handleHamburgerClick}>☰</div>
        <div className="ShoppingBag" onClick={openCart}>
          🛒
          <div className="cartItems">{cart.length > 0 ? cart.length : ''}</div>
        </div>

      </div>
    </header>
  );
}
