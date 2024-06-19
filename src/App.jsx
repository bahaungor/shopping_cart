import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// IMPORT LAYOUTS
import PlainLayout from './layouts/plainLayout/plainLayout';

// IMPORT PAGES
import Homepage from './pages/homepage/homepage';
import ErrorPage from './pages/error/error';
import Shop from './pages/shop/shop';

// IMPORT MAIN CSS TO LAYOUT
import './assets/styles/global.css';
import './assets/styles/reset.css';

// DEFINE WHICH REACT PAGE TO SERVE WHEN CERTAIN ROUTE REQ.
const router = createBrowserRouter([
  {
    path: '/', // PARENT PATH SHOULD START FROM ROOT
    element: <PlainLayout />, // PARENT COMPONENT (LAYOUT)
    errorElement: <ErrorPage />, // ERROR ELEMENT
    children: [
      // RENDER element INSIDE <Outlet /> OF PARENT COMPONENT (LAYOUT) WHEN path REQUESTED
      { path: '/', element: <Homepage /> },
      { path: '/shop', element: <Shop /> },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
