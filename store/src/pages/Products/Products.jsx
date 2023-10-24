import React, { useState } from 'react';
import "./Products.scss";
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(2000)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem'>
          <h2>LISTA DE PRODUCTOS</h2>
          <div className='inputItem'>
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Maquetas</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='2' value={2} />
            <label htmlFor="1">Salud Ocupacional</label>
          </div>
          <div className='inputItem'>
            <input type="checkbox" id='3' value={3} />
            <label htmlFor="1">Tecnología</label>
          </div>
        </div>
          <div className='filterItem'>
            <h2>Filtrar por precios:</h2>
            <div className='inputItem'>
              <span>0</span>
              <input type="range" min={0} max={2000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className='filterItem'>
            <h2>Filtrar por:</h2>
            <div className='inputItem'>
              <input type="radio" id='asc' value="asc" name='price' onChange={e=>setSort("asc")}/>
              <label htmlFor="asc">Menor precio</label>
            </div>
            <div className='inputItem'>
              <input type="radio" id='desc' value="asc" name='price' onChange={e=>setSort("desc")}/>
              <label htmlFor="desc">Mayor precio</label>
            </div>
          </div>
        </div>
          <div className='right'>
          <img className='catImg' src="https://i.postimg.cc/y6bvzDpV/3.png" alt="" />
          <List catId={catId} maxPrice={maxPrice} sort={sort}/>
          </div>
      </div>
      
    
  );
};

export default Products
