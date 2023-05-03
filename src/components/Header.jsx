import React from 'react'
import { Link} from "react-router-dom";
import {FiShoppingBag} from "react-icons/fi";
import { useSelector } from 'react-redux';
import logo from '../assets/log.png'


const Header = () => {
  const {cartItems}= useSelector(state=>state.cart)
  return (
    <nav>
        <img src={logo}/>

        <div>
            <Link to={"/"}>HOME</Link>
            <Link to={"/cart"}>
                <FiShoppingBag/>
                <p>{cartItems.length}</p>
            </Link>

        </div>
    </nav>
  )
}

export default Header