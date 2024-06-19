import { useEffect, useState } from 'react';
import './productPlacer.css';

export default function ProductPlacer({ position = 'left', num = 0, title = 'This Product Is Amazing' }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      {products && ( // Ensure products array is not null before rendering
        position === 'left'
          ? (
            <div className="productPlacer">
              <img src={products[num].image} alt="product image" />
              <div className="textCol">
                <div className="title">{title}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </div>
            </div>
            )
          : (
            <div className="productPlacer">
              <div className="textCol">
                <div className="title">{title}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </div>
              <img src={products[num].image} alt="product image" />
            </div>
            )
      )}
    </>
  );
}
