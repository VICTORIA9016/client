import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {

  const data = [
    {
      id: 1,
      img:"https://i.postimg.cc/26RB3qNM/3.png",
      img2:"https://i.postimg.cc/FHzS65xW/4.png",
      title:"Test de Ishihara AÑO 2023",
      isNew:true,
      oldPrice:750,
      price:650,
    },
    {
      id: 2,
      img:"https://i.postimg.cc/T3g7pDzv/1.png",
      img2:"https://i.postimg.cc/vmYxnMgf/3.png",
      title:"Maqueta Cráneo, Cerebro y Vertebras Cervicales",
      isNew:true,
      oldPrice:580,
      price:485,
    },
    {
      id: 3,
      img:"https://i.postimg.cc/VkkcbLBj/1.png",
      img2:"https://i.postimg.cc/XY55WKTd/2.png",
      title:"Maqueta Torso Humano Bisexual",
      isNew:true,
      oldPrice:750,
      price:620,
    },
    {
      id: 4,
      img:"https://i.postimg.cc/7b8xnzmr/1.png",
      img2:"https://i.postimg.cc/nzyH4bcn/4.png",
      title:"Mqueta Útero Sano",
      isNew:true,
      oldPrice:330,
      price:250,
    },
  ];

  return (
    <div className='list'>
      {data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List
