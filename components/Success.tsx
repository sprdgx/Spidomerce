import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export default function Sucess( ) {

    const {setSelectedProducts}: any = useContext(ProductsContext);

    const [success,setSuccess] = useState(false);

    useEffect(() => {
        if (window.location.href.includes('success')) {
          setSelectedProducts([]);
          setSuccess(true);
        }
      }, [setSelectedProducts]);
    return (
        <div>
          {success && (
          <>

          <div className="mt-5 bg-white  text-red-300 font-bold text-xs	sm:w-full p-1 lg:w-1/4 rounded-xl">
            Kind of notification 😁:
          <div className="text-lg font-serif px-4 p-4">
              Thank You for Your Order! 🥰
          </div>
          </div>
          </>
          )}
        </div>
    )
}