import React from 'react'
import Appbar from '../Component/Appbar'
import { Outlet } from "react-router-dom";
import Home from '../pages/Home/Home'
import Footer from '../Component/Footer'
const Root = () => {
  return (
    <div>
        
<Appbar/>
<Outlet/>

<Footer/>


    </div>
  )
}

export default Root