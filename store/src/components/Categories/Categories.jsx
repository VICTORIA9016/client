import React from 'react'
import "./Categories.scss"
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
      <div className='row'>
        <img src='https://i.postimg.cc/CM6nf60b/3.png' alt=''/>
      <button>
        <Link className='link' to="/products/1">SALE</Link>
      </button>
      </div>
      <div className='row'>
      <img src='https://i.postimg.cc/7b8xnzmr/1.png' alt=''/>
      <button>
        <Link className='link' to="/products/1">ANATOMÍA</Link>
      </button>
      </div>
      </div>
      <div className='col'>
      <div className='row'>
      <img src='https://i.postimg.cc/HxtR2TTr/bobina-de-tesla.png' alt=''/>
      <button>
        <Link className='link' to="/products/1">TECNOLOGÍA</Link>
      </button>
      </div>
      </div>
      <div className='col co-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
            <img src='https://i.postimg.cc/Pr031C16/1.png' alt=''/>
            <button>
              <Link className='link' to="/products/1">MAQUETAS</Link>
            </button>
            </div>
          </div>
          <div className='col'>
          <div className='row'>
          <img src='https://i.postimg.cc/y6bvzDpV/3.png' alt=''/>
          <button>
            <Link className='link' to="/products/1">CORAZÓN</Link>
          </button>
          </div>
          </div>
        </div>
        <div className='row'>
        <img src='https://i.postimg.cc/KcwrHd4j/13.png' alt=''/>
        <button>
          <Link className='link' to="/products/1">TEST OCUPACIONALES</Link>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
