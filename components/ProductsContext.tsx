"use client";
import { createContext } from "react";
import useLocalStorageState from "use-local-storage-state";

export const ProductsContext = createContext({});

 export function ProductsContextProvider ({children}: { children:any }) {

    const [selectedProducts,setSelectedProducts] = useLocalStorageState ('cart' , {defaultValue:[]}) 

    return (
        <>
        <div className="bg-red-300">
        
        <ProductsContext.Provider value={{selectedProducts,setSelectedProducts}}>{children}
        </ProductsContext.Provider>
        
        </div>
        </>
    );
 }