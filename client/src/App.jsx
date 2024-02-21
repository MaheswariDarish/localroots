import { ChakraProvider } from '@chakra-ui/react'
import Login from "./pages/Login"
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './App.css'
function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Dashboard/>}></Route>
        </Routes>
      </ChakraProvider>
    </>
  )
}

export default App
