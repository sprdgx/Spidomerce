import Footer from 'components/Footer'
import { ProductsContextProvider } from 'components/ProductsContext'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return( 
      <ProductsContextProvider >
      <Component {...pageProps} />
      <div className='lg:w-1/2 lg:ml-12'>
      <Footer/>
      </div>
      </ProductsContextProvider>
  )
}