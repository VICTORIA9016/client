import React, { useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./Slider.scss";

const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0)

const data = [
  "https://i.postimg.cc/Mp891hL9/1.png",
  "https://i.postimg.cc/bvyLB1pb/2.png",
  "https://i.postimg.cc/KY0QS48W/3.png",
];


const prevSlide =()=>{
  setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};
const nextSlide =()=>{
  setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};


  return (
    <div className='slider'>
    <div className='container' 
    style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
      < img src={data[0]} alt=''/>
      < img src={data[1]} alt=''/>
      < img src={data[2]} alt=''/>
      </div>
      <div className='icons'>
        <div className='icon' onClick={prevSlide}>
          <ArrowBackIosNewOutlinedIcon/>
        </div>
        <div className='icon' onClick={nextSlide}>
          <ArrowForwardIosOutlinedIcon/>
        </div>
      </div>
    </div>
  );
};

export default Slider;