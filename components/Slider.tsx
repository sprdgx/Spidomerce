"use client";

import { RxDotFilled } from 'react-icons/rx';
import { SetStateAction, useState } from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';


export default function Slider () {

    const slides = [
        {
          url: 'https://www.financialexpress.com/wp-content/uploads/2022/09/apple-airpods-pro.jpg',
        },
        {
          url: 'https://www.dpreview.com/files/p/articles/9372733781/C27D6229-412F-4393-8962-D1B41DE89F2C.png',
        },
        {
          url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },
    
        {
          url: 'https://www.dpreview.com/files/p/articles/9372733781/E4F2347B-30EB-4111-ABD0-73AC78AA3D7C.png',
        },
        {
          url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(1);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex: SetStateAction<number>) => {
        setCurrentIndex(slideIndex);
      };

      
    return (
      <>
      <h3 className='text-xl font-bold text-white py-5 font-mono px-4'>1-/Choice Your Best Gift 🎁</h3>
      <div className='max-w-[500px] h-[300px] lg:max-w-[700px] lg:h-[500px] w-full m-auto  px-4 relative group'>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className=' duration-500 w-full h-full rounded-2xl bg-center bg-cover '>
        </div>
        <div className=' lg:group-hover:block absolute top-[50%] w-1/8  hidden translate-x-4 translate-y-[-50%] left-3 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
        <BsFillCaretLeftFill onClick={prevSlide} size={30} />
      </div>
      
      <div className=' lg:group-hover:block absolute top-[50%] w-1/8 hidden -translate-x-4 translate-y-[-50%] right-3  text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer'>
        <BsFillCaretRightFill onClick={nextSlide} size={30} />
      </div>
      </div>
      <div className='flex justify-center'>
          <h1 className='sm:hidden text-white text-lg top-4 pt-5 justify-center'>SWIPE</h1>
      <div className='flex top-4 justify-center pt-5'>
      {slides.map((_slide, slideIndex) => (


          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-3xl text-white cursor-pointer'
          >
            <RxDotFilled /> 
          </div>
        
        ))}
      </div>
      </div>
      </>
      
    )
}