import 'bootstrap/dist/css/bootstrap.css'
import '..styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

function MyApp({Component,pageProps}:AppProps){
  return(
    <>
    <head>
      <meta name="viewport"content="width=device-width, initial-scale=1"/>
    </head>
    <Component {...pageProps}/>
    </>
  )
}
export default MyApp