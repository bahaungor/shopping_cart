// IMPORT HOOKS IF YOU NEED DATABASE INTERACTION
import { Link } from 'react-router-dom';

// IMPORT EXTERNAL CSS
import ThemeSwitch from '../darkTheme/switch';
import './header.css';

export default function Header({ handleHamburgerClick }) {
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
        <div className="ShoppingBag">🛒</div>
      </div>
    </header>
  );
}
