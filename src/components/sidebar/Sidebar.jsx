import React from 'react'
import './Sidebar.css'
import { BiUserPlus, BiSearch } from 'react-icons/bi'
import { AiOutlineBars } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Link to={"/"}>
                <h1>Logo</h1>
            </Link>
            <AiOutlineBars className='sidebar_bars' />
            <div className='sidebar_serch'>
                <BiSearch className='sidebar_serch_icon' />
                <input type="text" placeholder='Search' />
            </div>
            <ul>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <Link to={'/vacancy/all'}>All Countries</Link>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <Link to={'/vacancy/uae'}>UAE</Link>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <Link to={'/vacancy/saudiarabia'}>Saudi Arabiya</Link>
                </li>
                <li>
                    <BiUserPlus className='svg' />
                    <div className='sidebar_center_line'></div>
                    <Link to={'/vacancy/bahrain'}>Bahrain</Link>
                </li>


            </ul>

        </div>
    )
}

export default Sidebar
