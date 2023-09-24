import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import NavigationOuter from './components/NavigationOuter'
import Landingpage from './pages/Landingpage'
// import NewRegistration from './components/NewRegistratin'
import RegistraionPages from './pages/RegistraionPages'
import Corepage from './pages/Corepage'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/h"  element={<NavigationOuter/>}/>
      <Route path="/" element={<Landingpage/>} />
      <Route path='/registration'  element={<RegistraionPages/>} />
    <Route path='/home'  element={<Corepage/>} />
    </Routes>
    </BrowserRouter>
  )
}
