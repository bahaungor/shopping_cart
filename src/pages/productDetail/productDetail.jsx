import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../ShopContexts';
import './productDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { cart, setCart } = useContext(ShopContext);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(response => setProduct(response))
      .catch(error => console.error(error));
  }, [id]);

  const addToCart = (productToAdd) => {
    const productIndex = cart.findIndex(item => item.product.id === productToAdd.id);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity++;
      setCart(updatedCart);
    }
    else {
      setCart([...cart, { product: productToAdd, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(item => item.product.id !== productToRemove.id);
    setCart(updatedCart);
  };

  const decreaseQuantity = (productToRemove) => {
    const productIndex = cart.findIndex(item => item.product.id === productToRemove.id);
    const updatedCart = [...cart];
    if (updatedCart[productIndex].quantity === 1) {
      removeFromCart(productToRemove);
    }
    else {
      updatedCart[productIndex].quantity--;
      setCart(updatedCart);
    }
  };

  const cartItem = cart.find(item => item.product.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <div className="productDetail">
      <div className="imgContainer"><img src={product.image} alt="product image" /></div>
      <div className="detailContainer">
        <div className="title">
          {product.title}
          {' '}
          -
          {' '}
          {product.price}
          $
        </div>
        <div className="description">{product.description}</div>
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
}
