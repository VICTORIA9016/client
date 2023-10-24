import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://i.postimg.cc/7b8xnzmr/1.png",
    "https://i.postimg.cc/FRgFmCVp/8.png",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
          <h1>Title</h1>
          <span className="price">$199</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et
            similique ea ipsum expedita dicta odio laborum pariatur delectus
            atque, aspernatur natus facilis deserunt quod. Distinctio temporibus
            autem incidunt perferendis.
          </p>
          <div className="quantity">
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
          </div>
          <button className="add">
            <AddShoppingCartIcon/> AÑADIR PEDIDO
          </button>
          <div className="link">
            <div className="item">
              <FavoriteBorderIcon/> AÑADIR A LISTA DE DESEOS
            </div>
            <div className="item"> 
              <BalanceIcon/>COMPARAR PRODUCTOS
            </div>
          </div>
              <div className="info">
                <span>Material: PVC Ecológica </span>
                <span>Tipo de producto: Maqueta Anatómica</span>
                <span>Etiquetas: Maquetas, Anatomía, Medicina</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPCIÓN</span>
                <hr />
                <span>INFORMACIÓN ADICIONAL</span>
                <hr />
                <span>PREGUNTAS FRECUENTES</span>
              </div>
            </div>
          </div>
  );
};
export default Product;
