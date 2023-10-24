import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item">
            <span>PEN</span>
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">SALUD</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">OFTALMOLOGÍA</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">TECNOLOGÍA</Link>
          </div>
        </div>
        <div className="center">
         
          <Link className="link" to="/">
          <img src="/img/logo.png" alt="ELECTRIC SALUD" width={290} height={100}/>
          </Link>
       
        </div>
        <div className="right">
          
          <div className="item">
            <Link className="link" to="/">Inicio</Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">Nosotros</Link>
          </div>
          <div className="item">
            <Link className="link" to="/contac">Contacto</Link>
          </div>
          <div className="item">
            <Link className="link" to="/store">Tienda</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <AccountCircleIcon/>
            <FavoriteIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <AddShoppingCartIcon/>
            <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;
