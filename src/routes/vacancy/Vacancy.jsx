import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './Vacancy.css'
import VacancyCard from '../../components/vacancyCard/VacancyCard'
import { Route, Routes } from 'react-router-dom'

function Vacancy() {
    return (
        <div className='vacancy'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<VacancyCard />} />
                <Route path='/uae' element={<VacancyCard country="uae" />} />
                <Route path='/saudiarabia' element={<VacancyCard country="saudiarabia" />} />
                <Route path='/bahrain' element={<VacancyCard country="bahrain" />} />
            </Routes>

        </div>
    )
}

export default Vacancy
