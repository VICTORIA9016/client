import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
          <h1>CATEGORÍAS</h1>
          <span>Salud Ocupacional</span>
          <span>Maquetas anatómicas</span>
          <span>Tecnología</span>
        </div>
        <div className='item'>
          <h1>REDES SOCIALES</h1>
          <span>Tik Tok</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Linkedin</span>
        </div>
        <div className='item'>
          <h1>NOSOTROS</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque beatae corrupti distinctio odit pariatur. Modi qui eveniet illum est, consequatur commodi rem reprehenderit fugiat minima deleniti provident cupiditate laboriosam?</span>
        </div>
        <div className='item'>
          <h1>CONTACTO</h1>
          <h2> 994 971 591 </h2> 
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>ELECTRIC SALUD S.A.C.</span>
          <span className='copyright'>
          © Copyright 2023. All Right Reserved by VictoryDev
          </span>
        </div>
        <div className='right'>
          <img src="./img/payment.png" alt="cards" />
        </div>
      </div>

    </div>
  )
}

export default Footer