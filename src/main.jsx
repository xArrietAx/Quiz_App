import ReactDOM from 'react-dom/client'
import { ContextProvider } from "./Context/Context";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ChakraProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
  </ChakraProvider>
    </BrowserRouter>
)