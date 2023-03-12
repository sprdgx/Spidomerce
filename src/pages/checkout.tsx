import 'src/app/globals.css'
import { ProductsContext, ProductsContextProvider } from 'components/ProductsContext'
import { useContext, useEffect, useState } from 'react'
import Image from "next/image";


export default function ChekoutPage () {

    const {selectedProducts,setSelectedProducts} :any = useContext (ProductsContext)
    const [productsInfos,setProductsInfos] = useState<any[]>([])
    const uniqProds = [...new Set(selectedProducts)]
    const [address,setAddress] = useState<any | null>(null)
    const [city,setCity] = useState<any | null>(null)
    const [name,setName] = useState<any | null>(null)
    const [email,setEmail] = useState<any | null>(null)
    const [number,setNumber] = useState<any | null>(null)

    useEffect( () => {
        fetch('/api/products?ids='+uniqProds.join(','))
        .then(response => response.json())
        .then(json => setProductsInfos(json))
    }, [selectedProducts])

    function addMoreOfThisProduct(id: any) {
        setSelectedProducts((prev: any) => [...prev,id])
    }
    function GetLessOfThisProduct(id: any) {
        const pos = selectedProducts.indexOf(id)
        if (pos !==-1) {
           
           setSelectedProducts((prev: any) => {
            return prev.filter((_value: any,index: any) => index !== pos)
           })
        }
    }


    const shipping = 500;
    let subtotal = 0;
    if (selectedProducts?.length) {
      for (let id of selectedProducts) {
        const price = productsInfos.find(p => p._id === id)?.price || 0;
        subtotal += price;
      }
    }
    const total = subtotal + shipping;

    return (
    <div className='px-5 pt-5 bg-red-300 '>
        <ProductsContextProvider  >
            {!selectedProducts.length && ( 
                <div className='text-white text-lg lg:text-2xl px-4 lg:px-12 ml-12'>No Products Added In Your Shooping Cart 😔</div>
            )}
            {productsInfos.map(productsInfo => {
                const amount = selectedProducts.filter((id: any) => id === productsInfo._id).length;
                if (amount === 0) return;
                return (
                <div key={','} className='flex mb-5'>
                    <div className='bg-white p-3 rounded-xl shrink-0'>
                        <Image width={500} height={500} className='w-24' src={productsInfo.picture} alt="" />
                    </div>
                    <div className='pl-4 lg:w-1/2'>
                        <h3 className='text-lg font-bold uppercase text-white'>{productsInfo.name}</h3>
                        <p className='text-sm  leading-5 lg:w-1/2 text-gray-600 '>{productsInfo.description}</p>
                        <div className='flex'>
                            <div className=' text-white font-bold mt-1 '>{productsInfo.price}</div>
                            <h3 className='grow text-white font-bold mt-1 ml-2'>DA</h3>
                            <div className='items-start	'>
                                <button onClick={() => GetLessOfThisProduct(productsInfo._id)} className='border-2 border-white px-2 text-white rounded-lg'>-</button>
                                <span className='px-4 lg:px-6 text-white'>
                                {selectedProducts.filter((id: any) => id === productsInfo._id).length}
                                </span>
                                <button onClick={() => addMoreOfThisProduct(productsInfo._id)} className='lg:px-4 px-2 text-white border-2 border-white rounded-lg'>+</button>
                            </div>
                        </div>
                    </div> 
                </div>
            )})}
            <form action="/api/checkout" method="POST">
                <div className='mt-4 ' >
                    <input name="address" value={address} onChange={e => setAddress(e.target.value)} className=' bg-white p-2 mb-2 lg:m-2 lg:ml-10 w-full placeholder:text-red-400 lg:w-1/2 rounded-lg' type="text" placeholder='Street Adress , Appertement'/>
                    <input name="city" value={city} onChange={e => setCity(e.target.value)}className=' bg-white p-2 mb-2 lg:m-2 lg:ml-10 w-full placeholder:text-red-400  lg:w-1/2 rounded-lg' type="text" placeholder='Wilaya , City'/>
                    <input name="name" value={name} onChange={e => setName(e.target.value)}className=' bg-white p-2 mb-2  w-full lg:m-2 lg:ml-10 placeholder:text-red-400  lg:w-1/2 rounded-lg' type="text" placeholder='Your Name'/>
                    <input name="number" value={number} onChange={e => setNumber(e.target.value)}className=' bg-white p-2 mb-2 w-full lg:m-2 lg:ml-10 placeholder:text-red-400  lg:w-1/2 rounded-lg' type="text" placeholder='Your Number'/>
                    <input name="email" value={email} onChange={e => setEmail(e.target.value)}className=' bg-white p-2 mb-2 lg:m-2 lg:ml-10 w-full placeholder:text-red-400  lg:w-1/2 rounded-lg' type="text" placeholder='Email'/>
                </div>
                <div className=''>
                    <div className=' flex mt-3 lg:ml-10 lg:w-1/2'>
                        <h3 className='text-white grow font-bold uppercase'>Subtotal:</h3>
                        <h3 className='text-white font-bold' >{subtotal}</h3>
                        <h3 className='text-white font-bold ml-2'>DA</h3>
                    </div>
                    <div className=' flex mt-3 lg:ml-10 lg:w-1/2'>
                        <h3 className='grow text-white font-bold uppercase'>Shipping:</h3>
                        <h3 className='text-white font-bold' >{shipping}</h3>
                        <h3 className='text-white font-bold ml-2 '>DA</h3>
                    </div>
                    <div className=' flex mt-3 border-t-2 border-dashed border-white lg:ml-10 lg:w-1/2'>
                        <h3 className='text-white grow font-bold uppercase'>Total:</h3>
                        <h3 className='text-white font-bold'>{total}</h3>
                        <h3 className='text-white font-bold ml-2'>DA</h3>
                    </div>
                </div>
                <input type="hidden" name="products" value={selectedProducts.join(',')}/>
                <button type="submit" className="bg-white lg:w-1/2 lg:ml-10 px-5 py-2 rounded-xl font-bold text-red-400 w-full my-4 shadow-white shadow-lg">Pay {total} DA</button>
            </form>
        </ProductsContextProvider>
        </div>
        
    )
}