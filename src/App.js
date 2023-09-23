import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavigationOuter from './components/NavigationOuter'
import Landingpage from './pages/Landingpage'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home"  element={<NavigationOuter/>}/>
      <Route path="/" element={<Landingpage/>} />
    </Routes>
    </BrowserRouter>
  )
}
