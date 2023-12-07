import React from 'react'
import './Appbar.css'
import { useNavigate } from 'react-router'
import Home from '../pages/Home/Home'
import Cart from '../pages/Cart/Cart'

const Appbar = () => {
  const navigate =useNavigate()
  return (
    <div>
        
{/* startnavbar */}
<nav class="nav">
      <i class="uil uil-bars navOpenBtn"></i>
      <a href="#" class="logo">Shoping</a>
      <ul class="nav-links">
        <i class="uil uil-times navCloseBtn"></i>
        <li><a onClick={()=>{

<Navigate to="/cart" />

        }} href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <i class="uil uil-search search-icon" id="searchIcon"></i>
      <div class="search-box">
  mohamamd
      </div>
    </nav>
    {/* end navbar */}

    </div>
  )
}

export default Appbar