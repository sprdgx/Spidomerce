import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import Image from "next/image";

export default function Product ({_id,price,name,description,picture} : { _id: number; name: string ; price: string ; description: string ; picture: string})  {

const {setSelectedProducts}: any = useContext(ProductsContext)
function addProduct () {
   setSelectedProducts((prev: any) => [...prev,_id])
}

    return (
        <div className="w-64 py-5">
        <div className=" bg-white rounded-xl py-7 ">
          <Image width={500} height={500} src={picture} alt="" />
        </div>
        <div className="mt-2 font-bold text-uppercase text-white text-2xl">
          <h3>{name}</h3>
        </div>
        <div className=" "> 
          <p className='text-sm mt-2 leading-4 text-gray-600'>{description}</p>
        </div>
        <div className="flex mt-2">
          <h1 className=' grow text-xl font-bold text-white'>{price}DA</h1>
          <button onClick={addProduct} className='bg-white rounded-xl py-1 px-3 text-red-400 text-lg'>+</button>
        </div>
      </div>
    );
}