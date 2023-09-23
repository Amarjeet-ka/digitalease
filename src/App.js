import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavigationOuter from './components/NavigationOuter'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<NavigationOuter/>}/>
    </Routes>
    </BrowserRouter>
  )
}
