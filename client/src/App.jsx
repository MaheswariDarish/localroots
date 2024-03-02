import { ChakraProvider } from '@chakra-ui/react'
import Login from "./pages/Login"
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import './App.css'
import Productdesc from './pages/Productdesc'
import Layout from './Layout'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/sell" element={<Create />} />
          <Route path="/:id" element={<Productdesc />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
