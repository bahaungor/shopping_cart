import { RouterProvider, createHashRouter } from 'react-router-dom';
import { useState } from 'react';

// IMPORT LAYOUTS
import PlainLayout from './layouts/plainLayout/plainLayout';

// IMPORT PAGES
import Homepage from './pages/homepage/homepage';
import ErrorPage from './pages/error/error';
import Shop from './pages/shop/shop';
import ProductDetail from './pages/productDetail/productDetail';
import Cart from './pages/cart/cart';
import Thankyou from './pages/thankyou/thankyou';

// IMPORT CONTEXTS
import { ShopContext } from './ShopContexts';

// IMPORT MAIN CSS TO LAYOUT
import './assets/styles/global.css';
import './assets/styles/reset.css';

// DEFINE WHICH REACT PAGE TO SERVE WHEN CERTAIN ROUTE REQ.
const router = createHashRouter([
  {
    path: '/', // PARENT PATH SHOULD START FROM ROOT
    element: <PlainLayout />, // PARENT COMPONENT (LAYOUT)
    errorElement: <ErrorPage />, // ERROR ELEMENT
    children: [
      // RENDER element INSIDE <Outlet /> OF PARENT COMPONENT (LAYOUT) WHEN path REQUESTED
      { path: '/', element: <Homepage /> },
      { path: '/shop', element: <Shop /> },
      { path: '/product/:id', element: <ProductDetail /> },
      { path: '/cart', element: <Cart /> },
      { path: '/thank-you', element: <Thankyou /> },
    ],
  },
]);

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <ShopContext.Provider value={{ cart, setCart }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
}
