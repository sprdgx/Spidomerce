
import Footer from "components/Footer"
import { ProductsContextProvider } from "components/ProductsContext"
import './globals.css'



export default function RootLayout({children}: { children:any }) {


  
  return (
    <html>
      <body>
      <ProductsContextProvider>{children}</ProductsContextProvider>
      </body>
    </html>
  )
}
