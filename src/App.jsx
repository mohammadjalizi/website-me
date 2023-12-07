import React from 'react'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart  />} />




     
    </Route>
  )
);

const App = () => {
  return (

   
    <RouterProvider router={router} />
  )
}

export default App