import { NavBar, ItemDetailContainer, Cart, ItemListContainer } from "./Components/index.js"
import Styles from './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalContext, GlobalContextProvider } from "./Context/GlobalContext.jsx"


export const App = () => {

  return (

      <GlobalContextProvider>
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:category" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />}/>
        </Routes>
        </BrowserRouter>
      </GlobalContextProvider>
   
  )
}