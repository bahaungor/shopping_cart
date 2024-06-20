import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../ShopContexts';

import './cart.css';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(ShopContext);

  const totalPrice = cart.reduce((accum, item) => accum + item.product.price * item.quantity, 0);

  function addToCart(element) {
    const productIndex = cart.findIndex(item => item.product.id === element.product.id);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity++;
      setCart(updatedCart);
    }
    else {
      setCart([...cart, { element, quantity: 1 }]);
    }
  }

  function removeFromCart(element) {
    const updatedCart = cart.filter(item => item.product.id !== element.product.id);
    setCart(updatedCart);
  }

  function decreaseQuantity(element) {
    const productIndex = cart.findIndex(item => item.product.id === element.product.id);
    const updatedCart = [...cart];
    if (updatedCart[productIndex].quantity === 1) {
      removeFromCart(element);
    }
    else {
      updatedCart[productIndex].quantity--;
      setCart(updatedCart);
    }
  }

  function checkOut() {
    setCart([]);
    navigate('/thank-you');
  }

  return (
    cart.length > 0
      ? (
        <div className="cartContainer">
          <div className="products">
            {cart.map(element => (
              <div key={element.product.id} className="productContainer">
                <div className="imgContainer"><img src={element.product.image} alt="product image" /></div>
                <div className="productDetail">
                  <div className="productTitle">{element.product.title}</div>
                  <div className="buttonContainer">
                    <div className="quantityButtons">
                      <button type="button" onClick={() => decreaseQuantity(element)}>−</button>
                      <div className="quantity">{element.quantity}</div>
                      <button type="button" onClick={() => addToCart(element)}>+</button>
                    </div>
                    <div className="productPrice">
                      {element.product.price * element.quantity}
                      $
                    </div>
                    <button className="removeButton" type="button" onClick={() => removeFromCart(element)}>X</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="priceChart">
            <div className="price">{`Total Price: ${totalPrice.toFixed(2)}$`}</div>
            <button type="button" onClick={checkOut}>Checkout</button>
          </div>
        </div>
        )
      : (
        <div className="emptyCart">Your cart is empty</div>
        )
  );
}
