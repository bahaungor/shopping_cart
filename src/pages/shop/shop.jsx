import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../ShopContexts';

import './shop.css';

export default function Shop() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(ShopContext);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(error => console.error(error));
  }, []);

  function addToCart(product) {
    const productIndex = cart.findIndex(item => item.product.id === product.id);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity++;
      setCart(updatedCart);
    }
    else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  }

  function removeFromCart(product) {
    const updatedCart = cart.filter(item => item.product.id !== product.id);
    setCart(updatedCart);
  }

  function decreaseQuantity(product) {
    const productIndex = cart.findIndex(item => item.product.id === product.id);
    const updatedCart = [...cart];
    if (updatedCart[productIndex].quantity === 1) {
      removeFromCart(product);
    }
    else {
      updatedCart[productIndex].quantity--;
      setCart(updatedCart);
    }
  }

  return (
    <div className="shopProducts">
      {products
        ? (
            products.map((product) => {
              const cartItem = cart.find(item => item.product.id === product.id);
              const quantityInCart = cartItem ? cartItem.quantity : 0;

              return (
                <div key={product.id} className="product">
                  <div className="imgContainer" onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.image} alt="Product image" />
                  </div>
                  <div onClick={() => navigate(`/product/${product.id}`)}>{product.title}</div>
                  <div className="priceRow">
                    <div className="price">
                      {product.price}
                      $
                    </div>
                    {quantityInCart > 0
                      ? (
                        <div className="quantityButtons">
                          <button type="button" onClick={() => decreaseQuantity(product)}>−</button>
                          <div className="quantity">{quantityInCart}</div>
                          <button type="button" onClick={() => addToCart(product)}>+</button>
                        </div>
                        )
                      : (
                        <button type="button" onClick={() => addToCart(product)}>Add to Cart</button>
                        )}
                  </div>
                </div>
              );
            })
          )
        : (
          <div>No Products Available</div>
          )}
    </div>
  );
}
