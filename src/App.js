import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import Vacancy from './routes/vacancy/Vacancy'
import Staff from './routes/staff/Staff'
import Admin from './routes/admin/Admin'
import Login from './routes/login/Login'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SinglePage from './routes/singlePage/SinglePage'


function App() {

  let auth = localStorage.getItem('auth') || null

  return (
    <div className='app'>
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/vacancy/*' element={<Vacancy />} />
        <Route path='/staff' element={<Staff />} />

        {
          auth ?
            <Route path='/login' element={<Navigate replace to={"/admin"} />} />
            :
            <Route path='/admin' element={<Navigate replace to={"/login"} />} />
        }
        <Route path='/admin/*' element={<Admin />} />
        <Route path='/login' element={< Login />} />

        <Route path='/vacancy/all/:id' element={<SinglePage />} />
      </Routes>

    </div>
  )
}

export default App
