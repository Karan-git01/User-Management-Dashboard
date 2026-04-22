import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Subscription from './pages/Subscription'
import Payments from './pages/Payments'
import Users from './pages/Users'
import UsersDetails from './pages/UsersDetails'

function App() {


  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id" element={<UsersDetails/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
