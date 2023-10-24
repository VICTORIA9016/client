import React from 'react'
import "./FeaturedProducts.scss"
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {

  const data = [
  {
    id: 1,
    img: "https://i.postimg.cc/26RB3qNM/3.png",
    img2: "https://postimg.cc/CRydZ2Xk",
    title: "TEST DE ISHIHARA JAPONÉS AÑO 2023",
    isNew: true,
    oldPrice: 780,
    price:  650,
  },
  {
    id: 2,
    img: "https://i.postimg.cc/T3g7pDzv/1.png",
    title: "CRÁNEO, CEREBRO Y VERTEBRAS CERVICALES",
    isNew: true,
    oldPrice: 470,
    price:  385,
  },
  {
    id: 3,
    img: "https://i.postimg.cc/XY55WKTd/2.png",
    title: "TORSO HUMANO BISEXUAL DE 21 PIEZAS IMANTADO",
    isNew: true,
    oldPrice: 700,
    price:  620,
  },
  {
    id: 4,
    img: "https://i.postimg.cc/kGnrJy14/1.png",
    title: "MAQUETA DEL OÍDO 1.5x CON LÁMINA",
    isNew: true,
    oldPrice: 240,
    price:  180,
  },

  ]

  return (
    <div className='featuredProducts'>
      
      <div className='top'>
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quaerat adipisci id impedit neque nisi dolorem sequi eveniet fuga quidem corporis inventore, ratione deleniti deserunt reiciendis soluta delectus facilis libero?

        </p>
      </div>
      <div className='bottom'>
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>

    </div>
  )
}

export default FeaturedProducts
