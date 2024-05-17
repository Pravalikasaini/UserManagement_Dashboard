import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import Home from './components/Home'
import Read from './components/Read'
import Update from './components/Update'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
            <Route path='/read/:id' element={<Read />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App