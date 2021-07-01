import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
