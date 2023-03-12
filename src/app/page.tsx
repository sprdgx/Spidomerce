"use client";

import Product from 'components/Product';
import { useEffect, useState } from 'react'
import { initMongooose } from 'lib/mongoose';
import { findAllProdcuts } from '@/pages/api/products';
import Footer from 'components/Footer';
import Success from 'components/Success';
import Slider from 'components/Slider';

export default function Home( {   }) {
  const [productsInfo,setProductsInfo]: any[] = useState([]) ;
  useEffect( () => {
    fetch('/api/products')   
    .then(response => response.json ()) 
    .then(json => setProductsInfo(json));
  },);
  

  
  const categoriesNames : any[] = [...new Set(productsInfo.map((p: { category: any; }) => p.category))];

  const [typing,setTyping] = useState('')

  let products: any[];

  if (typing) {
     products = productsInfo.filter((p: { name: string; }) => p.name.toLowerCase().includes(typing)) 
  } else {
    products = productsInfo
  }

  return (
      
      

       <div className="px-5 p-2 bg-red-300">
          <div className='text-center  pt-5'>
            <h3 className='text-3xl font-bold text-white font-mono text-center'>-/WELCOM TO OUR STORE 🤗 </h3>
            <h1 className='text-white pt-5 font-serif text-base'>Follow The Steps To Be Able To Purchase  🛍️</h1>
            <div className='flex space-x-10 justify-center'>
            <div className='justify-center '>
            <h1 className='text-white text-sm pt-1 font-serif '>PAGE I: </h1>
            <div className='text-center justify-center '>
              <h1 className='text-white text-sm pt-1 font-serif text-left	'>1-/ Choose Product </h1>
              <h1 className='text-white text-sm pt-1 font-serif text-left	'>2-/ Add to Cart </h1>
            </div>
            </div>
            <div>
            <h1 className='text-white text-sm pt-1 font-serif '>PAGE II: </h1>
            <div className='text-center justify-center '>
              <h1 className='text-white text-sm font-serif pt-1 text-left	'>1-/ Checkout </h1>
              <h1 className='text-white text-sm font-serif pt-1 text-left	'>2-/ Stripe Payments </h1>
            </div>
            </div>
            </div>
          </div>
          <Success />
          <Slider/>
          <div className=''>
            <h3 className='text-xl font-bold text-white font-mono pt-3 pb-5 px-4'>2-/Look for Products 🤓 </h3>
          </div>
          <input value={typing} onChange={e => setTyping(e.target.value)} type="text" placeholder='Search for Products...' className='bg-white w-full rounded-xl py-2 px-5 placeholder:text-red-400 ' />

          

           <div className="">

              {categoriesNames.map(categoryName => (
                    <div className='text-white'  key={categoryName}>
                      {products.find(p => p.category === categoryName ) && (
                        <div>
                          <h2 className='text-2xl font-bold mt-5 px-5'>{categoryName}</h2>
                          <div className='flex -mx-5 overflow-x-scroll snap-x scrollbar-hide'>
                            {products.filter(p => p.category === categoryName).map(productsInfo => (
                                <div key={productsInfo._id} className='px-5 snap-start'>
                                  <Product {...productsInfo}/>
                                  </div>
                                 
                            ))}
                         </div>
                         <Footer/>
                         </div>
                         )} 
                    </div>      
              ))}
       </div>
       
</div>

)}

