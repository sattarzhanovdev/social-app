import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPages } from './pages/General'
import { initializeApp } from 'firebase/app'
import './App.css'
import { firebaseConfig } from './configs'
import Chat from './pages/Chat/pages/Chat'

initializeApp(firebaseConfig)

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/auth/login' element={<MainPages.Pages.Login />} />
        <Route path='/auth/register' element={<MainPages.Pages.Register />} />
      </Routes>
    </div>
  )
}

export default App