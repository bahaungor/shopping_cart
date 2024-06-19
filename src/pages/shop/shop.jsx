import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './shop.css';

export default function Shop() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(response => setProducts(response))
      .catch(error => console.error(error));
  }, []);

  function addToCart() {

  }

  return (
    <div className="shopProducts">
      {products
        ? (
            products.map(product => (
              <div key={product.id} className="product" onClick={() => navigate(`/product/${product.id}`)}>
                <img src={product.image} alt="Product image" />
                <div>{product.title}</div>
                <div className="priceRow">
                  <div className="price">
                    {product.price}
                    $
                  </div>
                  <button type="button" onClick={addToCart}>Add to Cart</button>
                </div>
              </div>
            ))
          )
        : (
          <div>No Products Available</div>
          )}
    </div>
  );
}
