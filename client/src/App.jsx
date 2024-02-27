import { ChakraProvider } from '@chakra-ui/react'
import Login from "./pages/Login"
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import './App.css'
import Productdesc from './pages/Productdesc'
function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/:id" element={<Productdesc/>}></Route>
        </Routes> 
      </ChakraProvider>
    </>
  )
}

export default App
