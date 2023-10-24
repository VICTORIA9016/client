import React from 'react'
import "./Cart.scss"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Cart = () => {
  const data = [
    {
      id: 1,
      img:"https://i.postimg.cc/26RB3qNM/3.png",
      img2:"https://i.postimg.cc/FHzS65xW/4.png",
      title:"Test de Ishihara AÑO 2023",
      desc:"País de procedencia: Japón",
      isNew:true,
      oldPrice:750,
      price:650,
    },
    {
      id: 2,
      img:"https://i.postimg.cc/T3g7pDzv/1.png",
      img2:"https://i.postimg.cc/vmYxnMgf/3.png",
      title:"Maqueta Cráneo, Cerebro y Vertebras Cervicales",
      desc:"Material Ecológico",
      isNew:true,
      oldPrice:580,
      price:485,
    },
  ]

  return (
    <div className='cart'>
      <h1>Productos en el carrito</h1>
      {data?.map(item=>(
       <div className='item' key={item.id}>
        <img src={item.img} alt="" />
        <div className='details'>
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0,100)}</p>
          <div className='price'>1 x ${item.price}</div>
        </div>
        <div className='delete'>
          <DeleteOutlineOutlinedIcon/>
          </div>
       </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>REALIZAR EL PAGO</button>
      <span className='reset'>Borrar</span>
    </div>
  )
}

export default Cart